import mongoose from "mongoose";

// set rule
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});

// create table
export const Student = mongoose.model("Student", studentSchema);
