const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://vbosic:vladimirbosic91@mycluster.eq9u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hi there !");
});

app.listen(3000, () => {
  console.log("Listening on 3000!");
});
