"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      services: {
        type: Sequelize.STRING,
      },
      contactNo: {
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
    // await queryInterface.addColumn("Profiles", "userId", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "User",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Profiles");
    await queryInterface.removeColumn("Profiles", "userId");
  },
};
