"use strict";

const { randEmail, randPhoneNumber, rand, randText } = require("@ngneat/falso");

const { faker } = require("@faker-js/faker");
const { default: fetch } = require("node-fetch");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    const result = await queryInterface.bulkInsert("Users", [
      {
        accountType: 0,
        username: "Employer123",
        password: "Employer123",
        email: "Employer123@gmail.com",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        accountType: 1,
        username: "Handyman123",
        password: "Handyman123",
        email: "Handyman123@gmail.com",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        accountType: 2,
        username: "Admin123",
        password: "Admin123",
        email: "Admin123@gmail.com",
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const randImgUrlToBase64 = async () => {
      const img = await fetch(faker.image.people(300, 300, true));
      const buffer = await img.buffer();

      return buffer.toString("base64");
    };
    const base64Img = await randImgUrlToBase64();
    const res2 = await queryInterface.bulkInsert("Profiles", [
      {
        name: "Employer Demo",
        services: rand(
          [
            "plumbing",
            "housekeeping",
            "carpentry",
            "gardening",
            "babysitting",
            "masonry",
          ],
          { length: 3 }
        ).toString(),
        contactNo: randPhoneNumber({ countryCode: "PH" }),
        UserId: result[0],
        description: randText(),
        picture: base64Img,
        email: randEmail({ size: 8 }),
        ProfileId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Handyman Demo",
        services: rand(
          [
            "plumbing",
            "housekeeping",
            "carpentry",
            "gardening",
            "babysitting",
            "masonry",
          ],
          { length: 3 }
        ).toString(),
        contactNo: randPhoneNumber({ countryCode: "PH" }),
        UserId: result[1],
        description: randText(),
        picture: base64Img,
        email: randEmail({ size: 8 }),
        ProfileId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Admin Demo",
        services: rand(
          [
            "plumbing",
            "housekeeping",
            "carpentry",
            "gardening",
            "babysitting",
            "masonry",
          ],
          { length: 3 }
        ).toString(),
        contactNo: randPhoneNumber({ countryCode: "PH" }),
        UserId: result[2],
        description: randText(),
        picture: base64Img,
        email: randEmail({ size: 8 }),
        ProfileId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    return res2;
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
