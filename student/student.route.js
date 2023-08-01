import express from "express";
import { Student } from "./student.model.js";

const router = express.Router();

// add student
router.post("/student/create", async (req, res) => {
  const newStudent = req.body;

  await Student.create(newStudent);

  return res.status(201).send({ message: "Student added." });
});

// get all students
router.get("/students", async (req, res) => {
  const students = await Student.find();

  return res.status(200).send(students);
});

// edit a single student

// delete a student

export default router;
