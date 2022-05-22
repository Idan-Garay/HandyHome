const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/index.js");

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post(
  "/upload",
  upload.fields([
    { name: "file1", maxCount: 1 },
    { name: "file2", maxCount: 1 },
  ]),
  async (req, res, next) => {
    const files = req.files;

    try {
      if (files) {
        const reqFiles = Object.entries(req.files).map(([key, file]) => {
          const { buffer, fieldname, mimetype } = file[0];
          const base64Data = Buffer.from(buffer, "binary");
          return {
            type: mimetype,
            image: base64Data,
            ProfileId: req.body.ProfileId,
          };
        });
        const dbFiles = await db.ProfileValidation.bulkCreate(reqFiles);
        res.status(200).json(dbFiles);
      }
    } catch (e) {
      console.log(e);
    }

    next();
  }
);

router.post("/getFiles", async (req, res) => {
  try {
    const { id } = req.body;
    const files = await db.ProfileValidation.findAll({
      where: { ProfileId: id },
    });
    res.json(files);
  } catch (e) {
    console.log(e);
  }
});

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

router.post("/otherProfile", async (req, res) => {
  try {
    const { id } = req.body;
    let result = {};

    result.primary = await db.Profile.findOne({
      where: { id },
      include: [
        { model: db.Address, attributes: ["street", "city", "area"] },
        {
          model: db.User,
          attributes: ["id", "username", "email", "verified", "accountType"],
        },
      ],
    });
    if (result.primary) {
      result.secondary = await db.Profile.findAll(
        {
          where: {
            ProfileId: result.primary.id,
          },
        },
        {
          include: [
            { model: db.Address, attributes: ["street", "city", "area"] },
            {
              model: db.User,
              attributes: ["username", "email", "verified", "accountType"],
            },
          ],
        }
      );
    }

    res.json(result);
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
    let profiles = users.map((user) => {
      if (user.Profile.picture && user.Profile.picture.type === "buffer") {
        user.Profile.picture = Buffer.from(
          user.Profile.picture,
          "base64"
        ).toString();
      }
      user.Profile.services = user.Profile.services.split(",");
      return user.Profile;
    });

    res.status(200).jsonp(profiles);
  } catch (e) {
    console.log(e);
  }
});

router.get("/profiles/:id", async (req, res) => {
  try {
    const userId = req.params.id;
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

    // profile.picture = Buffer.from(profile.picture, "base64").toString();
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
