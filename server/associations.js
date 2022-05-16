const db = require("./models/index.js");

module.exports = async function setAssociations() {
  const { Profile, Address, User } = db;

  User.hasOne(Profile, { foreignKey: "userId", allowNull: false });

  Profile.belongsTo(User);
  Profile.hasOne(Address, { foreignKey: "profileId", allowNull: false });
  Address.belongsTo(Profile);

  const User2 = await User.create(
    {
      accountType: 0,
      username: "username1",
      password: "12311321",
      email: "username@gmail.com",
      Profile: {
        name: "Yoshi",
        services: "masonry,construction,gardener",
        contactNo: "09663204332",
        Address: {
          street: "National Highway, Reynes Building",
          city: "Poblacion Near Compostela Public Market",
          area: "Compostela",
        },
      },
      verified: true,
    },
    {
      include: [{ model: Profile, include: { model: Address } }],
    }
  );
};
