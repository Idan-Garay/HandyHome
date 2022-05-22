const express = require("express");
const { sequelize } = require("../models/index.js");
const router = express.Router();
const db = require("../models/index.js");

router.post("/order/feedback", async (req, res) => {
  try {
    const { feedbackForm } = req.body;
    const { type, ratings, description, orderId } = feedbackForm;
    const transformRatings = Object.keys(ratings)
      .map((entry) => ratings[entry])
      .join(",");

    const feedback = await db.Feedback.create({
      rates: transformRatings,
      description,
      OrderId: orderId,
    });
    res.json(feedback);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
