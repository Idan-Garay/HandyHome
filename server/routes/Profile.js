const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

const multer = require("multer");
const { profile } = require("console");

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

router.post(
  "/upload",
  upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
  ]),
  (req, res, next) => {
    const files = req.files;

    if (files) {
      const reqFiles = Object.entries(req.files).map(([key, file]) => {
        const { mimetype, filename } = file[0];
        return {
          type: mimetype,
          name: filename,
          image: "/client/public/validationImages" + filename,
          ProfileId: req.body.ProfileId,
        };
      });

      const dbFiles = db.ProfileValidation.bulkCreate(reqFiles);
      res.status(200).json(dbFiles);
    }

    next();
  }
);

router.get("/userProfile", async (req, res) => {
  try {
    let users = await db.User.findOne({
      where: { accountType: 1 },
      include: [{ model: db.Profile, include: [db.Address] }],
    });
    let profiles = users.map((user) => user.Profile);
    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});

router.get("/profiles", async (req, res) => {
  try {
    let users = await db.User.findAll({
      where: { accountType: 1 },
      include: [{ model: db.Profile, include: [db.Address] }],
    });
    let profiles = users.map((user) => user.Profile);
    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});

router.get("/profiles/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    // let profile = await db.Profile.findOne({
    //   include: db.Address,
    //   where: { userId: userId },
    // });
    let profile = await db.Profile.findOne({
      include: [
        { model: db.Address, attributes: ["street", "city", "area"] },
        {
          model: db.User,
          attributes: ["username", "email", "verified", "accountType"],
        },
      ],
      where: { userId: userId },
    });

    res.status(200).jsonp(profile);
  } catch (e) {
    console.log(e);
  }
});

router.patch("/profiles/:id/edit", async (req, res) => {
  try {
    let updateData = req.body;
    console.log(updateData, "----");
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

router.delete("/profiles/:id/delete", async (req, res) => {
  try {
    const { id } = req.body;
    if (id) {
      const profile = await db.Profile.destroy({ where: { id: id } });
      res.status(200).json(profile);
    } else res.status(200).json({ error: `Profile id of ${id} doesn't exist` });
  } catch (e) {
    console.log(e);
  }
});

router.get("/profiles/:id/teamMembers", async (req, res) => {
  try {
    const id = req.params.id;

    if (id) {
      const primaryProfile = await db.Profile.findOne({
        where: { UserId: id },
      });
      const teamMembers = await db.Profile.findAll({
        where: { ProfileId: primaryProfile.id },
      });

      console.log("----", teamMembers);
      res.status(200).json(teamMembers);
    } else res.status(200).json("Profile Id doesn't exist");
  } catch (e) {
    console.log(e);
  }
});

router.post("/profiles/:id/add", async (req, res) => {
  try {
    let { profile, address } = req.body;
    const id = req.params.id;
    const primaryProfile = await db.Profile.findOne({ where: { UserId: id } });

    if (primaryProfile) {
      let result = "Profile created successfully";

      const Profile = await db.Profile.create({
        ...profile,
        ProfileId: primaryProfile.id,
      });
      const Address = await db.Address.create({
        ...address,
        ProfileId: Profile.id,
      });
      if (!Profile) result = "Failed to create profile.";

      res.status(200).jsonp({ Profile, Address, result });
    } else res.status(200).jsonp("Something went wrong with Primary Profile");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
