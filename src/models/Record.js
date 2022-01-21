const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  time_start: {
    type: Date,
  },
  time_end: {
    type: Date,
  },
  hours: {
    type: Number,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
mongoose.model("Record", recordSchema);
