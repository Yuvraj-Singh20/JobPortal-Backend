# 🧠 Job Portal Backend

This is a **Node.js + Express** backend project built for a Job Portal system. It supports user registration, job posting, and job application functionalities with secure JWT-based authentication and admin role-based access.

---

## 🔧 Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Environment Management**: dotenv

---

## 📁 Folder Structure

├── config
│ └── db.js # MongoDB connection setup
├── models
│ ├── User.js # User schema and methods
│ ├── Job.js # Job schema
│ └── Application.js # Application schema
├── routes
│ ├── authRoutes.js # Register/Login routes
│ ├── jobRoutes.js # Job posting routes
│ └── applicationRoutes.js# Job application routes
├── middleware
│ └── (auth middleware) # To be added if needed
├── app.js # Main app file with middleware and route setup
├── server.js # Entry point (starts the server)
├── .env # Environment variables
├── .gitignore # Ignored files/folders
└── README.md # This file

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
Install dependencies

bash
Copy
Edit
npm install
Create .env file

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
Run the server

nodemon server.js
Server runs at: http://localhost:5000

🧪 API Endpoints Overview

🔐 Auth Routes
POST /api/auth/register – Register user
POST /api/auth/login – Login and get token


📄 Job Routes
POST /api/jobs/ – Create a job (admin only)
GET /api/jobs/ – Get all jobs
GET /api/jobs/:id – Get job by ID
DELETE /api/jobs/:id – Delete a job (admin only)



📬 Application Routes
POST /api/applications/:jobId – Apply for a job (user only)
GET /api/applications/ – Get all applications (admin only)


🛡 Admin Role
When registering, users get role: "user" by default. Admin users can:
Post and delete jobs
View all job applications

✅ Future Improvements
Add middleware for role-based access

Input validations using Joi or express-validator

Better error handling

Resume upload and email notifications

📄 License
This project is part of the CodeXIntern Backend Internship.

Developed by [Yuvraj Singh]


