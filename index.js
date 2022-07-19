//import express from 'express'; ES2015/ES6 Modules way
const express = require("express"); //Common modules way
require("./services/passport");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
