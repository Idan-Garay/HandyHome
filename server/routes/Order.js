const express = require("express");
const { sequelize } = require("../models/index.js");
const router = express.Router();
const db = require("../models/index.js");

router.patch("/order/validate", async (req, res) => {
  try {
    const validateInfo = req.body;
    const { isValid, orderId, from, to, accountType } = validateInfo;
    const result = { status: isValid ? "rejected" : "accepted" };

    const pv = await db.PaymentValidation.findOne({
      where: { OrderId: orderId, UserId: accountType === 0 ? from : to },
    });

    if (!pv) {
      const pvFrom = await db.PaymentValidation.create({
        isAccepted: 1,
        OrderId: orderId,
        UserId: accountType === 0 ? from : to,
      });
      const pvTo = await db.PaymentValidation.create({
        isAccepted: 0,
        OrderId: orderId,
        UserId: accountType === 0 ? to : from,
      });
    } else {
      pv.isAccepted = isValid;
      pv.save();
      const order = await db.Order.findOne({
        where: { status: "accepted", toUserId: to, fromUserId: from },
      });
      const fromPv = await db.PaymentValidation.findOne({
        where: { UserId: from, OrderId: order.id },
        attributes: ["isAccepted"],
      });
      const toPv = await db.PaymentValidation.findOne({
        where: { UserId: to, OrderId: order.id },
        attributes: ["isAccepted"],
      });

      if (fromPv && toPv) {
        if (fromPv.isAccepted && toPv.isAccepted) {
          result.status = "completed";
          await order.save({ status: "completed" });
        }
      }
    }
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
  }
});

router.post("/orders/employer", async (req, res) => {
  try {
    const { employerUserId } = req.body;
    let Orders = await db.Order.findAll({
      attributes: [
        "id",
        "status",
        "contactNo",
        "price",
        "description",
        "updatedAt",
        "toUserId",
      ],
      where: { fromUserId: employerUserId },
    });
    if (Orders) {
      let x;

      for (x = 0; x < Orders.length; x++) {
        const profile = await db.Profile.findOne({
          where: { UserId: employerUserId },
          attributes: ["name", "services"],
        });
        Orders[x] = { ...Orders[x].dataValues, ...profile.dataValues };
      }
    }
    res.status(200).json(Orders);
  } catch (e) {
    console.log(e);
  }
});

router.post("/orders/handyman", async (req, res) => {
  try {
    const { handymanUserId } = req.body;
    let Orders = await db.Order.findAll({
      attributes: [
        "id",
        "status",
        "contactNo",
        "price",
        "description",
        "updatedAt",
        "fromUserId",
      ],
      where: { toUserId: handymanUserId },
    });
    if (Orders) {
      let x;

      for (x = 0; x < Orders.length; x++) {
        const profile = await db.Profile.findOne({
          where: { UserId: handymanUserId },
          attributes: ["name", "services"],
        });
        Orders[x] = { ...Orders[x].dataValues, ...profile.dataValues };
      }
    }
    res.status(200).json(Orders);
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
    console.log(order);
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

router.patch("/request/confirm", async (req, res) => {
  try {
    const { order } = req.body;

    const dbOrder = await db.Order.findOne({ where: { id: order.id } });
    const toUser = await db.User.findOne({
      where: order.toUserId,
      attributes: ["name"],
    });
    const fromUser = await db.User.findOne({
      where: order.fromUserId,
      attributes: ["name"],
    });

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
