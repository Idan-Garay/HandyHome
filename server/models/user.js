"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      accountType: {
        // find way to change into [0,1,2] values only
        // column declaration
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      username: DataTypes.STRING, // shorthand column declaration
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      profileId: {
        type: DataTypes.INTEGER,
        /*references: {
        // This is a reference to another model
        model: Bar,

        // This is the column name of the referenced model
        key: "id",

        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      },*/
      },
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
