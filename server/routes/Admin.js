const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

router.get("/users", async (req, res) => {
    try {
      let users = await db.User.findAll();
      let userList = users.map((user) => user);
      res.status(200).jsonp(userList);
    } catch (e) {
      console.log(e);
    }
});

router.get("/orders", async (req, res) => {
    try {
      let orders = await db.Order.findAll();
      let orderList = orders.map((order) => order);
      res.status(200).jsonp(orderList);
    } catch (e) {
      console.log(e);
    }
});

router.get("/payments", async (req, res) => {
  try {
    let payments = await db.PaymentValidation.findAll();
    let paymentList = payments.map((payment) => payment);
    res.status(200).jsonp(paymentList);
  } catch (e) {
    console.log(e);
  }
});

router.get("/validations", async (req, res) => {
  try {
    let validations = await db.ProfileValidation.findAll();
    let validationList = validations.map((validation) => validation);
    res.status(200).jsonp(validationList);
  } catch (e) {
    console.log(e);
  }
});

router.get("/admin/profiles", async (req, res) => {
  try {
    let profiles = await db.Profile.findAll();
    let profileList = profiles.map((profile) => profile);
    res.status(200).jsonp(profileList);
  } catch (e) {
    console.log(e);
  }
});

router.get("/feedbacks", async (req, res) => {
  try {
    let feedbacks = await db.Feedback.findAll();
    let feedbackList = feedbacks.map((feedback) => feedback);
    res.status(200).jsonp(feedbackList);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
