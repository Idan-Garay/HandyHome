import fetch from "node-fetch";

import express from "express";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const userRoutes = express.Router();

const PORT = 4000;

userRoutes.route("/users").get((req, res) => {
  try {
    fetch(`http://localhost:${PORT}/users`)
      .then((data) => data.json())
      .then((users) => res.status(201).json(users));
  } catch (err) {
    console.log(err);
  }
});

// userRoutes.route("/users/email_activate").post((req, res) => {
//   sendConfirmationEmail(email);
// });

const sendConfirmationEmail = async (email) => {
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

  const result = transport
    .sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Confirmation Email",
      text: `Please confirm your account by clicking this link ${process.env.CLIENT_URL}/api/email/confirm/${token} within 20 minutes.`,
    })
    .then((res) => res.json());
};

userRoutes.route("/users").post((req, res) => {
  const { username, password, email } = req.body;

  const requestOptions = {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      accountType: 0,
      username,
      password,
      email,
      profileId: 1,
      verified: 0,
    }),
  };
  try {
    fetch(`http://localhost:${PORT}/users`, requestOptions)
      .then((res2) => {
        return res2.json();
      })
      .then(() => {
        sendConfirmationEmail(email).then(console.log);
      });
    res.status(200).jsonp({ success: "user is added" });
  } catch (err) {
    console.log(err);
  }
});

export default userRoutes;
