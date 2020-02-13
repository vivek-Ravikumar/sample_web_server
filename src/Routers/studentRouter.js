const express = require("express");
const students = require("../models/student");

const studentRouter = express.Router();

studentRouter
  .post("/", (req, res) => {
    if (req.body.id && req.body.FirstName) {
      students.push(req.body);
      res.status(200).json({ message: "post successfull" });
      console.log(students);
    } else {
      res.status(400).json({ message: "correct your data" });
    }
  })
  .get("/:id", (req, res) => {
    // const studentId = req.params.id;
    const { id = "" } = req.params;
    const requiredStudent = students.find(student => {
      if (parseInt(id) === student.id) {
        res.status(200).json({ student });
        return true;
      } else return false;
    });
  })
  .patch("/:id", (req, res) => {
    const { id } = req.params.id;
    const requiredStudent = students.find((student, studentIndex) => {
      if (parseInt(id) === student.id) {
        res.status(200).json({ student });
        return true;
      }
      return false;
    });
    console.log(requiredStudent);
  })
  .delete("/:id", (req, res) => {
    const { id } = req.params.id;
    console.log(students);
    const requiredStudent = students.find((student, studentIndex) => {
      if (parseInt(id) === student.id) {
        console.log(studentIndex);
        students.splice(studentIndex, 0);
        res.send("success");
        return true;
      } else {
        res.send("no data found");
        return false;
      }
    });
  });

module.exports = studentRouter;
