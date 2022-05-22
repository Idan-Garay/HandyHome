"use strict";
const db = require("../models/index.js");
const {
  randEmail,
  randFullName,
  randPhoneNumber,
  rand,
  randText,
  randStreetName,
  randCity,
  randCounty,
} = require("@ngneat/falso");

const { faker } = require("@faker-js/faker");
const { default: fetch } = require("node-fetch");

module.exports = {
  async up(queryInterface, Sequelize) {
    const dbPrimaryProfiles = await db.Profile.findAll({
      attributes: ["id"],
      include: [
        { model: db.User, where: { accountType: 1 }, attributes: ["id"] },
      ],
    });

    const randImgUrlToBase64 = async () => {
      const img = await fetch(faker.image.people(300, 300, true));
      const buffer = await img.buffer();

      return buffer.toString("base64");
    };

    let primaryProfIds = dbPrimaryProfiles.map((p) => p.id);

    const createSecondaryProfile = async () => {
      const base64Img = await randImgUrlToBase64();
      const dbProfId = await queryInterface.bulkInsert("Profiles", [
        {
          name: randFullName({ size: 12 }),
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
          UserId: null,
          description: randText(),
          picture: base64Img,
          email: randEmail({ size: 8 }),
          ProfileId: rand(primaryProfIds),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      await queryInterface.bulkInsert("Addresses", [
        {
          street: randStreetName(),
          city: randCity(),
          area: randCounty(),
          ProfileId: dbProfId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      return dbProfId;
    };

    const manySecondaryProfiles = async (N) => {
      const dbProfiles = [];

      for (let x = 0; x < N; x++) {
        const prof = await createSecondaryProfile();
        dbProfiles.push(prof);
      }
      return dbProfiles;
    };
    return await manySecondaryProfiles(10);
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
