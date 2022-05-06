// const express = require("express");
import express from "express";
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
// const cors = require("cors");
import cors from "cors";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import { verifyUser } from "./jsonServerRequests.js";

// require("dotenv").config();
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/", userRoutes);

app.post("/api/email/send_confirmation", async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const token = jwt.sign({ email }, process.env.JWT_ACC_ACTIVATION_KEY, {
    expiresIn: "20m",
  });

  const result = await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Confirmation Email",
    text: `Please confirm your account by clicking this link ${process.env.CLIENT_URL}/api/email/confirm/${token} within 20 minutes.`,
  });

  res.status(200).json(result);
});

// api/email/confirm/:token ->tokens in params, verify, findUser, change verified

app.get("/api/email/confirm/:token", (req, res) => {
  const { token } = req.params;

  jwt.verify(token, process.env.JWT_ACC_ACTIVATION_KEY, (err, decodedToken) => {
    if (!err) {
      const { email } = decodedToken;
      verifyUser(email);
      res.status(200).jsonp("successfully confirmed");
    } else {
      console.log(err);
    }
  });
});

app.listen(3501, () => {
  console.log("here:\n Server is listening on port 3501");
});
