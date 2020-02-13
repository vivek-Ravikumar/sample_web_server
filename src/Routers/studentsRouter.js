const express = require("express");
const students = require("../models/student");

const studentsRouter = express.Router();

studentsRouter.get("/", (req, res) => {
  // res.status(200);
  // res.send(students);

  res.status(200).json({ students }); //object short hand notation (if key and value are same , key name alone can be specified)
});

module.exports = studentsRouter;
