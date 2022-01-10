require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri =
  "mongodb+srv://vbosic:vladimirbosic91@mycluster.eq9u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on 3000!");
});
