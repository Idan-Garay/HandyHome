"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Profile);
      this.hasOne(models.PaymentValidation);
      this.hasOne(models.Order, { as: "ToUser", foreignKey: "toUserId" });
      this.hasOne(models.Order, { as: "FromUser", foreignKey: "fromUserId" });
    }
  }
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      accountType: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      username: DataTypes.STRING, // shorthand column declaration
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
