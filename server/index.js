const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { verifyUser } = require("./jsonServerRequests.js");
const path = require("path");

const { Sequelize } = require("sequelize");
const db = require("./models/index.js");
// require("./associations")();
require("dotenv").config();

const sequelize = new Sequelize("handyHome", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    // await db.User.sync({ alter: true });
    // await db.Profile.sync({ alter: true });
    // await db.Address.sync({ alter: true });
    // await db.Order.sync({ alter: true });
    // await db.Feedback.sync({ alter: true });
    // await db.PaymentValidation.sync({ alter: true });
    // await db.ProfileValidation.sync({ alter: true });

    // transfer all api endpoints to server/routes
    const profileRoutes = require("./routes/Profile.js");
    const addressRoutes = require("./routes/Address.js");
    const userRoutes = require("./routes/User.js");
    const orderRoutes = require("./routes/Order.js");
    const jobRoutes = require("./routes/Job.js");

    const app = express();
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      next();
    });

    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

    app.use(express.static(path.join(__dirname, "../client/public")));
    app.use(express.json());
    app.use("/", userRoutes);
    app.use("/", addressRoutes);
    app.use("/", profileRoutes);
    app.use("/", orderRoutes);
    app.use("/", jobRoutes);

    app.post("/api/email/send_confirmation", async (req, res) => {
      const { email } = req.body;

      const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      const token = jwt.sign({ email }, process.env.JWT_ACC_ACTIVATION_KEY, {
        expiresIn: "20m",
      });

      const result = await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject: "Confirmation Email",
        text: `Please confirm your account by clicking this link ${process.env.CLIENT_URL}/api/email/confirm/${token} within 20 minutes.`,
      });

      res.status(200).json(result);
    });

    // api/email/confirm/:token ->tokens in params, verify, findUser, change verified

    app.get("/api/email/confirm/:token", (req, res) => {
      const { token } = req.params;

      jwt.verify(
        token,
        process.env.JWT_ACC_ACTIVATION_KEY,
        (err, decodedToken) => {
          if (!err) {
            const { email } = decodedToken;
            verifyUser(email);
            res.status(200).jsonp("successfully confirmed");
          } else {
            console.log(err);
          }
        }
      );
    });

    app.listen(3501, () => {
      console.log("here:\n Server is listening on port 3501");
    });

    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
