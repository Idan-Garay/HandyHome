"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.hasOne(models.Address);
    }
  }
  Profile.init(
    {
      name: { type: DataTypes.STRING, defaultValue: "" },
      services: { type: DataTypes.STRING, defaultValue: "" },
      contactNo: { type: DataTypes.STRING, defaultValue: "" },
    },
    { sequelize, modelName: "Profile" }
  );
  return Profile;
};
