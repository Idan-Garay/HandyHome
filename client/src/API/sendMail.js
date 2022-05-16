"use strict";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(registrantEmail) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  const email = "projecthandyman12@gmail.com";
  const pass = "Handyman123";

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    port: 587,
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: registrantEmail, // list of receivers
    subject: "Confirmation Email ✔", // Subject line
    text: "url here: rasd123", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

sendMail().catch(console.error);

export default sendMail;
