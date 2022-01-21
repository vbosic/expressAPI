require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const userRoutes = require("./routes/userRoutes");
const statusRoutes = require("./routes/statusRoutes");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
app.use(userRoutes);
app.use(statusRoutes);

const mongoUri =
  "mongodb+srv://vbosic:vladimirbosic91@mycluster.eq9u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send({ status: "Connected" });
});

app.listen(5000, () => {
  console.log("Listening on 5000!");
});
