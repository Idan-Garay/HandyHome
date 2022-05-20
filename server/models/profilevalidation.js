"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProfileValidation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Profile);
    }
  }
  ProfileValidation.init(
    {
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProfileValidation",
    }
  );
  return ProfileValidation;
};
