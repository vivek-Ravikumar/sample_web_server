const express = require("express");
const students = require("./models/student");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/students", (req, res) => {
  // res.status(200);
  // res.send(students);

  res.status(200).json({ students });
});

const server = app.listen(3000, (req, res) => {
  console.log(`server running on port : ${server.address().port}`);
});
