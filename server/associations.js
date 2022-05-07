const db = require("./models/index.js");

module.exports = function setAssociations() {
  const { Profile, Address, User } = db;

  User.hasOne(Profile, { foreignKey: "userId", allowNull: false });

  Profile.belongsTo(User);
  Profile.hasOne(Address, { foreignKey: "profileId", allowNull: false });
  Address.belongsTo(Profile);
};
