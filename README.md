# Student Management System - Backend

A simple and lightweight backend API for a Student Management System built with Node.js and Express.

---

## Student Information
- **Name**: Deepak Singh
- **Roll No**: 2500320100417
- **Class / Section**: CSE-16
- **Project**: FSD MIDTERM-1

---

## Tech Stack
- **Node.js**
- **Express.js**
- **CORS**

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

3. **Run the server**:
   ```bash
   npm start
   ```
   The server will start at: `http://localhost:5000`

---

## API Endpoints (CRUD)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Test server connection |
| `GET` | `/students` | Fetch all students |
| `GET` | `/students/:id` | Fetch a single student by ID |
| `POST` | `/students` | Create/Add a new student |
| `PUT` | `/students/:id` | Update student by ID |
| `DELETE` | `/students/:id` | Delete student by ID |

---

## Sample Request Payloads

### 1. Add Student (`POST /students`)
**Request Body (JSON):**
```json
{
  "name": "Aman Verma",
  "rollNo": "2500320100420",
  "course": "B.Tech CSE"
}
```

### 2. Update Student (`PUT /students/:id`)
**Request Body (JSON):**
```json
{
  "name": "Aman Verma",
  "course": "B.Tech AI & ML"
}
```

