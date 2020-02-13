const express = require("express");
const bodyParser = require("body-parser");

const studentsRouter = require("./Routers/studentsRouter");
const studentRouter = require("./Routers/studentRouter");

const teachersRouter = require("./Routers/teachersRouter");
const teacherRouter = require("./Routers/teacherRouter");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/students", studentsRouter);
app.use("/student", studentRouter);

app.use("/teachers", teachersRouter);
app.use("/teacher", teacherRouter);

const server = app.listen(3000, (req, res) => {
  console.log(`server running on port : ${server.address().port}`);
});
