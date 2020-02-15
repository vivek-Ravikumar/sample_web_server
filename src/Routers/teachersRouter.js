const express = require("express");
const teachers = require("../models/teacher");

const teachersRouter = express.Router();
let newTeachers = [];
module.exports = teachersRouter;

teachersRouter
  .get("/", (req, res) => {
    res.status(200).json(teachers);
  })

  .post("/", (req, res) => {
    if (req.body.data) {
      //console.log(req.body.data);
      newTeachers = req.body.data.map(data => teachers.push(data));
      console.log(teachers);
      res.status(200).json({ message: "success" });
    } else res.status(400).json({ message: "enter right data" });
  })

  .delete("/", (req, res) => {
    const { data } = req.body;

    if (data) {
      let numberOfDeletions = 0;
      for (let i in data) {
        for (let j in teachers) {
          if (Number(data[i]) === teachers[j].id) {
            teachers.splice(j, 1);
            numberOfDeletions++;
          }
        }
      }
      if (numberOfDeletions) {
        res.send("deletion successfull");
      } else res.send("no data found");
    }
  });
