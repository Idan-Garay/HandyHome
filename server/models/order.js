"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Feedback);
      this.hasOne(models.PaymentValidation);
      this.belongsTo(models.User);
    }
  }
  Order.init(
    {
      price: DataTypes.FLOAT,
      description: DataTypes.STRING,
      status: { type: DataTypes.STRING, defaultValue: "pending" },
      contactNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
