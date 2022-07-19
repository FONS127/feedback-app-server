const express = require("express"); //Common modules
//import express from 'express'; ES2015/ES6 Modules
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there3", bye: "later" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
