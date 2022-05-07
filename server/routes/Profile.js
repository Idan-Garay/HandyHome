const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models/index.js");

router.get("/profiles", async (req, res) => {
  try {
    let profiles = await db.Profile.findAll();

    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});

// router.post("/profiles", async (req, res) => {
//   const addressData = req.body;

//   const address = await db.Address.create(addressData);
//   console.log("created address: ", address);
//   res.status(200).jsonp(address);
// });

module.exports = router;
