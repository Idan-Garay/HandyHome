const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const db = require("../models/index.js");

const users = [
  {
    accountType: 0,
    username: "Holmes465",
    password: "Sherk1234",
    email: "BakerSt221B@gmail.com",
    verified: 1,
  },
  {
    accountType: 1,
    username: "John12345",
    password: "John1234",
    email: "JohnB@gmail.com",
    verified: 1,
  },
  {
    accountType: 2,
    username: "admin",
    password: "admin12345",
    email: "admin@gmail.com",
    verified: 1,
  },
];

const Profiles = [
  {
    name: "Holmes Baker",
    services: "",
    contactNo: "09663202312",
    description:
      "An employer looking for people to work as gardener and masonry.",
    email: "",
    userId: "",
    picture: "",
    ProfileId: "",
  },
  {
    name: "John Stokes",
    services: "Masonry, Gardening",
    contactNo: "09524124214",
    description:
      "An employer looking for people to work as gardener and mason.",
    email: "JohnB@gmail.com",
    userId: "",
    picture: "",
    ProfileId: "",
  },
  {
    name: "Crud Admin",
    services: "",
    contactNo: "09323333444",
    description: "",
    email: "admin123@gmail.com",
    userId: "",
    picture: "",
    ProfileId: "",
  },
];

/*
  Users: accountType, username, password, email, verified
  Profiles: name, services, contactNo, UserId, description, picture, email, ProfileId
  Address: street, city, area, ProfileId
  Orders: price, description, status, contactNo, UserId, toUserId, fromUserId
  Feedbacks: description, rates, OrderId
  PaymentValidations: isAccepted, OrderId, UserId
  ProfileValidations: govDocument, selfie, ProfileId
*/
