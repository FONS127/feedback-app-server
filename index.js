//import express from 'express'; ES2015/ES6 Modules way
const express = require("express"); //Common modules way

const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.get("/", (req, res) => {
  res.send(keys.mongoURI);
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
