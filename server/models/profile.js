"use strict";
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.hasOne(models.Address);
      this.hasOne(models.ProfileValidation);
    }
  }
  Profile.init(
    {
      name: { type: DataTypes.STRING, defaultValue: "" },
      services: { type: DataTypes.STRING, defaultValue: "" },
      contactNo: { type: DataTypes.STRING, defaultValue: "" },
      description: { type: DataTypes.STRING, defaultValue: "" },
      picture: { type: DataTypes.BLOB, defaultValue: "" },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
