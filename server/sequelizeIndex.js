// to be changed to index.js

const { Sequelize } = require("sequelize");
const db = require("./models/index.js");

// connecting to db requires creating Sequelize instance
const sequelize = new Sequelize("handyHome", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // transfer all api endpoints to server/routes

    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
module.exports = {
  sequelize,
};
