const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Deepak Singh", email: "deepak@gail.com", course: "B.Tech CSE" },
  { id: 2, name: "Rahul Sharma", rollNo: "2500320100418", course: "B.Tech CSE" }
];

app.get("/", (req, res) => {
  res.send("Student Management API is running!");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

app.post("/students", (req, res) => {
  const { name, rollNo, course } = req.body;
  if (!name || !rollNo) {
    return res.status(400).json({ message: "Name and Roll No are required!" });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    rollNo,
    course: course || "N/A"
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, rollNo, course } = req.body;
  if (name) student.name = name;
  if (rollNo) student.rollNo = rollNo;
  if (course) student.course = course;

  res.json({ message: "Student updated successfully", student });
});

app.delete("/students/:id", (req, res) => {
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
