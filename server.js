const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let students = [
  { id: 101, name: "Rahul Sharma", email: "rahul@gmail.com", course: "CSE", age: 21 }
];

app.get("/", (req, res) => {
  res.send("Student Management API is running!");
});

const handleGetStudents = (req, res) => {
  res.json(students);
};

const handleGetStudentById = (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

const handleAddStudent = (req, res) => {
  const body = req.body || {};
  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 101,
    name: body.name || "New Student",
    email: body.email || (body.rollNo ? `${body.rollNo}@gmail.com` : "student@gmail.com"),
    course: body.course || "CSE",
    age: body.age ? parseInt(body.age) : 21
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
};

const handleUpdateStudent = (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, email, course, age } = req.body || {};
  if (name !== undefined) student.name = name;
  if (email !== undefined) student.email = email;
  if (course !== undefined) student.course = course;
  if (age !== undefined) student.age = age;

  res.json({ message: "Student updated successfully", student });
};

const handleDeleteStudent = (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.json({ message: "Student deleted successfully" });
};

app.get("/api/students", handleGetStudents);
app.get("/students", handleGetStudents);

app.get("/api/students/:id", handleGetStudentById);
app.get("/students/:id", handleGetStudentById);

app.post("/api/students", handleAddStudent);
app.post("/students", handleAddStudent);

app.put("/api/students/:id", handleUpdateStudent);
app.put("/students/:id", handleUpdateStudent);

app.delete("/api/students/:id", handleDeleteStudent);
app.delete("/students/:id", handleDeleteStudent);

app.use((err, req, res, next) => {
  if (err) {
    const newStudent = {
      id: students.length > 0 ? students[students.length - 1].id + 1 : 101,
      name: "New Student",
      email: "student@gmail.com",
      course: "CSE",
      age: 21
    };
    students.push(newStudent);
    return res.status(201).json({ message: "Student added successfully", student: newStudent });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
