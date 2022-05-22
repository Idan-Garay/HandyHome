"use strict";

const {
  randNumber,
  randEmail,
  randFullName,
  randPassword,
  randUserName,
  randPhoneNumber,
  randStreetName,
  randCity,
  randCounty,
  rand,
  randText,
} = require("@ngneat/falso");
const { faker } = require("@faker-js/faker");
const { default: fetch } = require("node-fetch");

module.exports = {
  async up(queryInterface, Sequelize) {
    const createProfile = async () => {
      const dbUserId = await queryInterface.bulkInsert("Users", [
        {
          accountType: randNumber({ min: 0, max: 1 }),
          username: randUserName({ size: 8 }),
          password: randPassword({ size: 8 }),
          email: randEmail({ size: 8 }),
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      const randImgUrlToBlob = async () => {
        const img = await fetch(faker.image.people(300, 300, true));
        const buffer = await img.buffer();

        return buffer.toString("base64");
      };
      // Sequelize treats TEXT as BLOB messing up the img src, hence, from TEXT -> BLOB
      const base64Img = await randImgUrlToBlob();

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
          UserId: dbUserId,
          description: randText(),
          picture: base64Img,
          email: randEmail({ size: 8 }),
          ProfileId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      const y = await queryInterface.bulkInsert("Addresses", [
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

    const manyProfilesWithUsers = async (N) => {
      const dbProfiles = [];

      for (let x = 0; x < N; x++) {
        const prof = await createProfile();
        dbProfiles.push(prof);
      }
      return dbProfiles;
    };

    return await manyProfilesWithUsers(5);
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
