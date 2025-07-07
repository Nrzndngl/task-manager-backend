# 📝 Task Manager API

A simple and secure backend REST API built with **Node.js**, **Express**, and **MongoDB** for managing tasks. This project supports **user registration**, **login with JWT**, and **CRUD operations** for tasks.

---

## 🚀 Features

- User Registration & Login (JWT authentication)
- Protected routes for task operations
- Create, Read, Update, Delete (CRUD) tasks
- Role-based access (user/admin-ready)
- MongoDB integration via Mongoose
- Secure password hashing with bcrypt
- Modular ES module codebase

---

## 📁 Folder Structure
task-manager-backend/
├── config/ # Database connection
├── controllers/ # Route logic (auth, tasks)
├── middleware/ # Auth middleware
├── models/ # Mongoose models (User, Task)
├── routes/ # Express route handlers
├── .env # Environment variables
├── server.js # App entry point
└── package.json # Project config & scripts



---

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-backend.git
   cd task-manager-backend


2. **Install dependencies:**
   ```bash
   npm install
   
3. **Create .env file:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

4. **Run the development server:**
   ```bash
   npm run dev
   Make sure nodemon is installed. Use npx nodemon server.js if not globally installed.

---

## 📡 API Endpoints
🔐 Auth Routes (/api/auth)
| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/register` | Register a new user |
| POST   | `/login`    | Login and get token |

---

## 📌 Task Routes (/api/tasks) — (Protected)
| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Get all user tasks  |
| POST   | `/`      | Create a new task   |
| PUT    | `/:id`   | Update a task by ID |
| DELETE | `/:id`   | Delete a task by ID |

All /api/tasks routes require a valid Bearer token in headers.

---

## 🔒 Tech Stack
- Node.js
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js
- Dotenv
- Nodemon

---

## 👤 Author
Niranjan Dangol
GitHub: @Nrzndngl



my-project/
│
├── README.md              # Main project overview and setup instructions
├── LICENSE                # License information
├── .gitignore             # Files and directories to be ignored by Git
├── requirements.txt       # Dependencies (for Python projects)
│
├── docs/                  # Documentation files
│   ├── index.md           # Extended documentation homepage
│   ├── installation.md    # Installation instructions
│   ├── usage.md           # Usage examples
│   ├── api.md             # API reference (if applicable)
│   └── faq.md             # Frequently Asked Questions
│
├── src/                   # Source code
│   └── your_module/       # Your main module or package
│
├── tests/                 # Unit and integration tests
│   └── test_main.py
│
├── data/                  # Data files (optional)
│   ├── raw/
│   └── processed/
│
└── assets/                # Images, diagrams, or other media
    └── logo.png
