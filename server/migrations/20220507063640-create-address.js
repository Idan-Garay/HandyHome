"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      street: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    // await queryInterface.addColumn("Addresses", "profileId", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Profile",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Addresses", "profileId");
    await queryInterface.dropTable("Addresses");
  },
};
