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
    }
  }
  Order.init(
    {
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      contactNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
