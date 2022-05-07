"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Profile);
    }
  }
  Address.init(
    {
      street: { type: DataTypes.STRING, defaultValue: "" },
      city: { type: DataTypes.STRING, defaultValue: "" },
      area: { type: DataTypes.STRING, defaultValue: "" },
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
