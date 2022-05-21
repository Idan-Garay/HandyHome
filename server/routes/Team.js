const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../client/public/validationImages"));
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/upload", (req, res) => {
  res.send("upload here");
});

router.post("/profile/team/add", async (req, res) => {
  try {
    const member = req.body;
    let jsonStatus = "Successfully Added team member";
    const { profile, address, primaryProfileId } = member;
    const PrimaryProfile = await db.Profile.findOne({ id: primaryProfileId });

    if (PrimaryProfile) {
      const memberProfile = await db.Profile.create({
        ...profile,
        ProfileId: primaryProfileId,
      });
      const addr = await db.Address.create({
        address,
        ProfileId: memberProfile.id,
      });
    } else jsonStatus = "Failed to add team member to" + primaryProfileId;

    res.status(200).json(jsonStatus);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
