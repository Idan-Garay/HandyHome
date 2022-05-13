"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentValidation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Order);
    }
  }
  PaymentValidation.init(
    {
      isAccepted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "PaymentValidation",
    }
  );
  return PaymentValidation;
};
