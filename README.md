# 🧰 Job Portal Backend API

This is the backend for a Job Portal Management System built using **Node.js**, **Express**, and **MongoDB**.  
It supports user registration, login (JWT-based), role-based job posting (admin), and job applications (users).

---

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone https://github.com/Yuvraj-Singh20/JobPortal-Backend.git
cd JobPortal-Backend
2. Install dependencies
bash
Copy
Edit
npm install

3. Create a .env file in the root directory
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

4. Run the server
bash
Copy
Edit
nodemon server.js
Server will start at: http://localhost:5000

🔐 API Endpoints Overview
🔑 Auth Routes
POST /api/auth/register – Register user

POST /api/auth/login – Login and get JWT token

💼 Job Routes (admin protected)
POST /api/jobs/ – Create a job (admin only)

GET /api/jobs/ – Get all jobs

GET /api/jobs/:id – Get job by ID

DELETE /api/jobs/:id – Delete a job (admin only)

📝 Application Routes (user protected)
POST /api/applications/:jobId – Apply to a job (user only)

GET /api/applications/ – Get all applications (admin only)

GET /api/applications/my – Get logged-in user's applications

🧾 Folder Structure
bash
Copy
Edit
├── config
│   └── db.js                  # MongoDB connection setup
├── models
│   ├── User.js                # User schema and methods
│   ├── Job.js                 # Job schema
│   └── Application.js         # Job application schema
├── routes
│   ├── authRoutes.js          # Login & registration
│   ├── jobRoutes.js           # Job CRUD routes
│   └── applicationRoutes.js   # Application-related routes
├── middleware
│   └── authMiddleware.js      # JWT & role-based route protection
├── app.js                     # Express app configuration
├── server.js                  # Entry point to start the server
├── .env                       # Environment variables
├── .gitignore                 # Git ignored files
└── README.md                  # Project documentation
📌 Tech Stack
Node.js

Express

MongoDB + Mongoose

JWT for authentication

dotenv, nodemon

🙌 Author
Yuvraj Singh – GitHub

🪪 License
This project is for learning and demonstration purposes.


