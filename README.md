# Student Management System - Backend API

A clean and simple RESTful backend for a Student Management System built using Node.js and Express.js.

---

## Student Details
- **Name**: Deepak Singh
- **Roll No**: 2500320100417
- **Class / Section**: CSE-16
- **Project**: FSD MIDTERM-1

---

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, Express JSON

---

## Data Model
Each student record contains the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | Number | Auto-increment unique identifier |
| `name` | String | Full name of the student |
| `email` | String | Email address of the student |
| `course` | String | Enrolled course (e.g. B.Tech CSE) |
| `age` | Number | Age of the student |

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DeepakSingh563/FSD-MIDTERM-1_CSE-16_2500320100417.git
   cd MID-TERM-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```
   Server will be running at `http://localhost:3000`.

---

## API Endpoints (CRUD)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check route |
| `GET` | `/api/students` | Get all students |
| `GET` | `/api/students/:id` | Get student by ID |
| `POST` | `/api/students` | Add a new student |
| `PUT` | `/api/students/:id` | Update student details by ID |
| `DELETE` | `/api/students/:id` | Delete student by ID |

---

