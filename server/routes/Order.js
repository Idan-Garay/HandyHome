const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

router.post("/request", async (req, res) => {
  try {
    const { from, to, price, description, status, contactNo } = req.body;

    let profile = await db.Order.create({
      from,
      to,
      price,
      description,
      status,
      contactNo,
    });

    res.status(200).jsonp(profile);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
