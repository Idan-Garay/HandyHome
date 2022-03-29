const express = require("express");

const router = express.Router();

const users = [];

router
  .route("/user")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    const { user } = req.body;
    users.push({ username: user.username, password: user.password });
    res.json({ loggedIn: true, status: "Everything went well!", users });
  })
  .delete((req, res) => {
    const { username, password } = req.body;

    const findUser = users.findIndex(
      (user) => user.username === username && user.password === password
    );
    if (findUser === -1)
      res.status(401).json({ errorStatus: "Credentials did not match" });

    users.splice(findUser, 1);
    res.json(users);
  });

module.exports = router;
