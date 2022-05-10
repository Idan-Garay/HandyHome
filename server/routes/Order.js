const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

router.get("/profiles", async (req, res) => {
  try {
    let profiles = await db.Profile.findAll({ include: db.Address });

    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});
