const express = require("express");
const teachers = require("../models/teacher");
const teacherRouter = express.Router();

teacherRouter
  .get("/:id", (req, res) => {
    let requiredTeacher = teachers.find(
      data => data.id === Number(req.params.id)
    );
    res.status(200).json({ data: requiredTeacher });
  })
  .post("/", (req, res) => {
    if (req.body.id && req.body.firstname) {
      teachers.push(req.body);
      res.json("{message:'success'}");
    } else res.json({ message: "correct your Data" });
  })
  .delete("/:id", (req, res) => {
    let requiredIndex;
    let requiredTeacher = teachers.find((data, indexData) => {
      if (data.id === parseInt(req.params.id)) {
        requiredIndex = indexData;
        return true;
      }
      return false;
    });
    if (requiredIndex) {
      console.log(requiredIndex);
      teachers.splice(requiredIndex, 1);
      console.log(teachers);
      res.status(200).send(teachers);
    } else res.status(400).send("no data found");
  })
  .patch("/:id", (req, res) => {
    let newData = req.body;
    let requiredData = teachers.find((data, index) => {
      if (newData.id === data.id) {
        teachers.splice(index, 1, newData);
        res.send("success");
      }
    });
  });

module.exports = teacherRouter;
