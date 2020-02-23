const express = require("express");
const bodyParser = require("body-parser");

const expressHbs = require("express-handlebars");

const path = require("path"); //for managing both unix and linux paths

const studentsRouter = require("./Routers/studentsRouter");
const studentRouter = require("./Routers/studentRouter");

const teachersRouter = require("./Routers/teachersRouter");
const teacherRouter = require("./Routers/teacherRouter");

const students = require("./models/student");
const teachers = require("./models/teacher");

const formatIndex = require("./views/helpers/formatIndex");
const app = express();

//configuring express to use handlebars
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { formatIndex }
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views")); //path is used for platform independent access to files

//middle for reading JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    pageTitle: "home"
  });
});

app.get("/web/students", (req, res) => {
  res.render("student", {
    layout: "navigation-student",
    pageTitle: "students",
    href: "/web/students",
    students
  });
});

app.get("/web/addStudent", (req, res) => {
  res.render("addStudent", {
    layout: "addStudent",
    pageTitle: "Add Student",
    studentID: students.length + 1
  });
});

app.get("/web/teachers", (req, res) => {
  res.render("teacher", {
    layout: "navigation-teacher",
    pageTitle: "Teachers",
    teachers
  });
});

app.get("/web/teachers/:id", (req, res) => {
  console.log(teachers[1]);
  res.render("individualTeacher", {
    layout: "indTeacher",
    pageTitle: "Teacher",
    id: req.params.id,
    teacherData: teachers[req.params.id]
  });
});

app.use("/students", studentsRouter);
app.use("/student", studentRouter);

app.use("/teachers", teachersRouter);
app.use("/teacher", teacherRouter);

const server = app.listen(3000, (req, res) => {
  console.log(`server running on port : ${server.address().port}`);
});
