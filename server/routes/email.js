const express = require("express");

const emailRoutes = express.Router();

emailRoutes.route("/sendMail").get((req, res) => {});

export default emailRoutes;
