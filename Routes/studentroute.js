const express = require("express");

const routes = express.Router();

const Student = require("../Model/studentmodel");

//get a list of students from the database
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});

//add student to the database
routes.post("/students", async (req, res, next) => {
  try {
    const student = new Student(req.body);
    const result = await student.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

//update student in the database
routes.put("/students/:id", (req, res) => {
  res.send({ type: "Update Request" });
});

//delete student from the database
routes.delete("/student/:id", (req, res) => {
  res.send({ type: "Delete Request" });
});

module.exports = routes;
