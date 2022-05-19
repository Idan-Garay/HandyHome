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

module.exports = router;
