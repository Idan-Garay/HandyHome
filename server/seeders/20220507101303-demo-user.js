"use strict";

const {
  randNumber,
  randEmail,
  randFullName,
  randPassword,
  randUserName,
  randPhoneNumber,
  randStreetAddress,
  randStreetName,
} = require("@ngneat/falso");
const db = require("../models/index.js");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        accountType: randNumber({ min: 0, max: 2 }),
        username: randUserName({ size: 8 }),
        password: randPassword({ size: 8 }),
        email: randEmail({ size: 10 }),
        verified: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
