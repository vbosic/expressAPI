const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const cors = require("cors");

const router = express.Router();
router.use(cors());
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = new User({ email, password, name, date_joined: Date.now() });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(`Email "${req.body.email}" already in use`);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send("Provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send("Not found");
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send("Invalid pass or mail");
  }
});

module.exports = router;
