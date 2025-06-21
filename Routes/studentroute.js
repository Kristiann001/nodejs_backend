const express = require("express");

const routes = express.Router();

//get a list of students from the database
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});

//add student to the database
routes.post("/students", (req, res) => {
  res.send({ type: "Post Request" });
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
