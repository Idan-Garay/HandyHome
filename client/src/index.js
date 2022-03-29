const express = require("express");
const app = express();
const PORT = 8080;
const indexRouter = require("./routers/indexRouter");

app.use(express.json());
app.use("/api", indexRouter);

// use swagger hub for node
app.get("/", (req, res) => {
  const user = req.query.user;

  res.send(user + "!", user);
});

app.listen(PORT, () => console.log("It's alive on http://localhost:" + PORT));
