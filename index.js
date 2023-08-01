import express from "express";
import studentRoutes from "./student/student.route.js";
import { db_connect } from "./db_connect.js";

const app = express();
app.use(express.json());

// db_connect
db_connect();

// register routes
app.use(studentRoutes);

const port = 8000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
