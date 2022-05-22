const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

// User routes

router.get("/users", async (req, res) => {
    try {
      let users = await db.User.findAll();
      let userList = users.map((user) => user);
      res.status(200).jsonp(userList);
    } catch (e) {
      console.log(e);
    }
});

router.patch("/users/edit/:id", async (req, res) => {
  try {
    let updateData = req.body;
    console.log(updateData, "----");
    let user = await db.User.findOne({ where: { id: updateData.id } });
    if (user) {
      const { id, ...neededData } = updateData;
      user.set(neededData);
      let newUser = await user.save();

      res.status(200).json(newUser);
    } else {
      res
        .status(200)
        .json({ error: `User id of ${updateData.id} doesn't exist` });
    }
  } catch (e) {
    console.log(e);
  }
});

router.delete("/users/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const profile = await db.Profile.findOne({ where: { UserId: id } });
      if (profile != null) {
        const destroy = await db.Profile.destroy({ where: { id: profile.id } });
        res.status(200).json(destroy);
      }
      const user = await db.User.destroy({ where: { id: id } });
      res.status(200).json(user);
    } else res.status(200).json({ error: `User id of ${id} doesn't exist` });
  } catch (e) {
    console.log(e);
  }
});

// Order routes

router.get("/orders", async (req, res) => {
    try {
      let orders = await db.Order.findAll();
      let orderList = orders.map((order) => order);
      res.status(200).jsonp(orderList);
    } catch (e) {
      console.log(e);
    }
});

router.patch("/orders/edit/:id", async (req, res) => {
  try {
    let updateData = req.body;
    console.log(updateData, "----");
    let order = await db.Order.findOne({ where: { id: updateData.id } });
    if (order) {
      const { id, ...neededData } = updateData;
      order.set(neededData);
      let newOrder = await order.save();

      res.status(200).json(newOrder);
    } else {
      res
        .status(200)
        .json({ error: `Order id of ${updateData.id} doesn't exist` });
    }
  } catch (e) {
    console.log(e);
  }
});

router.delete("/orders/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const order = await db.Order.destroy({ where: { id: id } });
      res.status(200).json(order);
    } else res.status(200).json({ error: `Order id of ${id} doesn't exist` });
  } catch (e) {
    console.log(e);
  }
});

// Validation routes

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

// Profile Routes

router.get("/admin/profiles", async (req, res) => {
  try {
    let profiles = await db.Profile.findAll();
    let profileList = profiles.map((profile) => {
      profile.picture = Buffer.from(profile.picture, "base64").toString();
      return profile;
    })
  
    res.status(200).jsonp(profileList);
  } catch (e) {
    console.log(e);
  }
});

router.patch("/admin/profiles/edit/:id", async (req, res) => {
  try {
    let updateData = req.body;
    console.log(updateData, "----");
    let profile = await db.Profile.findOne({ where: { id: updateData.id } });
    if (profile) {
      const { id, ...neededData } = updateData;
      profile.set(neededData);
      let newProfile = await profile.save();

      res.status(200).json(newProfile);
    } else {
      res
        .status(200)
        .json({ error: `Order id of ${updateData.id} doesn't exist` });
    }
  } catch (e) {
    console.log(e);
  }
});

router.delete("/admin/profiles/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const order = await db.Profile.destroy({ where: { id: id } });
      res.status(200).json(order);
    } else res.status(200).json({ error: `Order id of ${id} doesn't exist` });
  } catch (e) {
    console.log(e);
  }
});

// Feedback Routes

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
