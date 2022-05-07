const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models/index.js");

router.post("/addresses", async (req, res) => {
  const addressData = req.body;

  const address = await db.Address.create(addressData);
  console.log("created address: ", address);
  res.status(200).jsonp(address);
});

module.exports = router;
