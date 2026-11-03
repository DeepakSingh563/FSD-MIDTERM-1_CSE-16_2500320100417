const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [

  { id: 101, name: "Rahul Sharma", email: "rahul@gmail.com", course: "CSE", age: 21 }
];

app.get("/", (req, res) => {
  res.send("Student Management API is running!");
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

app.post("/api/students", (req, res) => {
  const { name, email, course, age } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required!" });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 101,
    name,
    email,
    course: course || "N/A",
    age: age || null
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

app.put("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, email, course, age } = req.body;
  if (name !== undefined) student.name = name;
  if (email !== undefined) student.email = email;
  if (course !== undefined) student.course = course;
  if (age !== undefined) student.age = age;

  res.json({ message: "Student updated successfully", student });
});

app.delete("/api/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
