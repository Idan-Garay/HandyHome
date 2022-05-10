const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

router.get("/profiles", async (req, res) => {
  try {
    let profiles = await db.Profile.findAll({ include: db.Address });

    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});

router.get("/profiles/:id", async (req, res) => {
  try {
    console.log("here", req.params);
    const profileId = req.params.id;
    let profile = await db.Profile.findOne({
      include: db.Address,
      where: { id: profileId },
    });

    res.status(200).jsonp(profile);
  } catch (e) {
    console.log(e);
  }
});

// router.post("/profiles", async (req, res) => {
//   const addressData = req.body;

//   const address = await db.Address.create(addressData);
//   console.log("created address: ", address);
//   res.status(200).jsonp(address);
// });

module.exports = router;
