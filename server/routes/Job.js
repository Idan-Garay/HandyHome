const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

router.get("/jobs", async (req, res) => {
    try {
      let jobs = await db.Jobs.findAll();
      let categories = jobs.map((job) => job);
      res.status(200).jsonp(categories);
    } catch (e) {
      console.log(e);
    }
});

module.exports = router;
