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

router.patch("/profiles/:id/edit", async (req, res) => {
  try {
    let updateData = req.body;
    let profile = await db.Profile.findOne({ where: { id: updateData.id } });
    if (profile) {
      const { id, ...neededData } = updateData;
      profile.set(neededData);
      let newProfile = await profile.save();

      res.status(200).json(newProfile);
    } else {
      res
        .status(200)
        .json({ error: `Profile id of ${updateData.id} doesn't exist` });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
