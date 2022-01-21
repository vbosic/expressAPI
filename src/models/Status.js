const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  userid_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
  },
  time_start: {
    type: String,
  },
  time_end: {
    type: String,
  },
  place: {
    type: String,
  },
});

module.exports = mongoose.model("Status", statusSchema);
