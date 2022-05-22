const express = require("express");
const { sequelize } = require("../models/index.js");
const router = express.Router();
const db = require("../models/index.js");

router.post("/orders", async (req, res) => {
  try {
    const { fromUserId } = req.body;
    let Orders = await db.Order.findAll({
      attributes: ["id", "status", "contactNo", "updatedAt", "toUserId"],
      where: { fromUserId: fromUserId },
    });

    if (Orders) {
      const result = await Promise.all(
        Orders.map(async (order) => {
          const profile = await db.Profile.findOne({
            attributes: ["name"],
            where: { UserId: order.toUserId },
          });
          let { toUserId, ...needAttrs } = order.dataValues;
          needAttrs.name = profile.name;
          needAttrs.updatedAt = new Date(needAttrs.updatedAt);
          return needAttrs;
        })
      );

      res.status(200).json(result);
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/request", async (req, res) => {
  try {
    const { from, to, price, description, contactNo } = req.body;

    let order = await db.Order.create({
      fromUserId: from,
      toUserId: to,
      price,
      description,
      contactNo,
    });

    res.status(200).jsonp(order);
  } catch (e) {
    console.log(e);
  }
});

router.patch("/request/accept", async (req, res) => {
  try {
    const { order } = req.body;

    const dbOrder = await db.Order.findOne({ where: { id: order.id } });

    if (dbOrder) {
      const status = order.status == 1 ? "accepted" : "rejected";

      dbOrder.set({ status: status });
      await dbOrder.save();

      res.status(200).json(`Request Order ${status}`);
    } else {
      res.status(200).json("Order doesn't exist");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/request/validate_payment", async (req, res) => {
  try {
    const { isAccepted, orderId, employerUserId, handymanUserId, accountType } =
      req.body;
    if (accountType === 0) {
      const dbValidatePayment = await db.PaymentValidation.create({
        isAccepted,
        OrderId: orderId,
        UserId: employerUserId,
      });
      const dbValidatePayment2 = await db.PaymentValidation.create({
        isAccepted: 0,
        OrderId: orderId,
        UserId: handymanUserId,
      });
    } else if (accountType === 1) {
      const dbValidatePayment = await db.PaymentValidation.findOne({
        where: { OrderId: orderId, UserId: handymanUserId },
      });
      dbValidatePayment.isAccepted = isAccepted;
      dbValidatePayment.save();
    }
    res
      .status(200)
      .json(`Payment was ${isAccepted ? "confirmed" : "non-confirmed"}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
