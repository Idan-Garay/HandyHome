const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models/index.js");

router.post("/register", async (req, res) => {
  const userData = req.body;

  const users = await db.User.findAndCountAll({
    where: {
      [Op.or]: [{ email: userData.email }, { username: userData.username }],
    },
  });

  try {
    const errors = {};

    let flag = false;
    const length = users.rows.length;

    for (let x = 0; x < length && !flag; x++) {
      if (users.rows[x].email === userData.email)
        errors.email = "Email already exists.";
      if (users.rows[x].username === userData.username)
        errors.username = "Username already exists.";
      if (Object.keys(errors).length === 2) flag = true;
    }

    if (!flag && users.count === 0) {
      const user = await db.User.create(userData);
      console.log(user, "here");
      const result = "User registered successfully.";
      res.status(200).json({ success: result });
      return { success: result };
    } else {
      res.status(202).json(errors);
      return errors;
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const user = await db.User.findOne({ where: { id: userId } });
  res.json(user);
});

router.post("/users", async (req, res) => {
  const userData = req.body.formData;
  const user = await db.User.create({ ...userData });
  res.json(user);
});

module.exports = router;
