const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");

const Status = require("../models/Status");

const router = express.Router();

router.post("/startwork", async (req, res) => {
  const { userid_id, place } = req.body;
  if (!userid_id || !place) {
    return res.status(422).send({ error: "Something is missing" });
  }
  try {
    const status = new Status({
      date: moment(),
      time_start: moment().format("HH:mm:ss"),
      time_end: null,
      place,
      userid_id,
    });
    await status.save();
    res.send(status);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.put("/endwork", (req, res) => {
  Status.findOneAndUpdate(
    req.body.userid_id == Status.userid_id,
    {
      time_end: moment().format("HH:mm:ss"),
    },
    { new: true }
  )
    .then((record) => {
      if (!record) {
        return res.status(404).send({ error: "Not found1" });
      }
      record.save();
      res.send(record);
    })
    .catch((err) => {
      return res.status(404).send({ error: "Not found2" });
    });
});

module.exports = router;
