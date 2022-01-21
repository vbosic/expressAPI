const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("User");

router.get("/getUserById", async (req, res) => {
  try {
    const user = await User.findOne({ userID: req.user._id });
    res.send(user);
  } catch (err) {
    res.status(404).send({ error: "Not found" });
  }
});

module.exports = router;
