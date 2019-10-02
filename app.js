//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", function (req, res) {
  res.sendFile(__dirname + "/data.html");
});

app.get("/brand", function (req, res) {
  res.sendFile(__dirname + "/brand.html");
});

app.get("/market", function (req, res) {
  res.sendFile(__dirname + "/market.html");
});

app.get("/media", function (req, res) {
  res.sendFile(__dirname + "/media.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/join", function (req, res) {
  res.sendFile(__dirname + "/join.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
