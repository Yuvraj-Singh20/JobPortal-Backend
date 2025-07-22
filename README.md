# 🧰 Job Portal Backend API

This is the backend for a **Job Portal Management System** built using **Node.js**, **Express**, and **MongoDB**.  
It supports:

- User registration and login (with JWT-based auth)
- Admin role to manage job postings
- Users applying to jobs
- Role-based route protection

---

## 🚀 How to Run Locally

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
Server starts at: http://localhost:5000


🔐 API Endpoints Overview
🔑 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user/admin
POST	/api/auth/login	Login and receive JWT


💼 Job Routes (Admin Only)
Method	Endpoint	Description
POST	/api/jobs/	Create a job
GET	/api/jobs/	Get all jobs
GET	/api/jobs/:id	Get job by ID
DELETE	/api/jobs/:id	Delete a job


📝 Application Routes (User Only / Admin)
Method	Endpoint	Description
POST	/api/applications/:jobId	Apply to a job (user only)
GET	/api/applications/	Get all applications (admin only)
GET	/api/applications/my	Get logged-in user's applications


📂 Folder Structure
bash
Copy
Edit
├── config
│   └── db.js                  # MongoDB connection
├── models
│   ├── User.js                # User schema
│   ├── Job.js                 # Job schema
│   └── Application.js         # Application schema
├── routes
│   ├── authRoutes.js          # Auth endpoints
│   ├── jobRoutes.js           # Job endpoints
│   └── applicationRoutes.js   # Application endpoints
├── middleware
│   └── authMiddleware.js      # JWT + Role protection
├── app.js                     # Express app setup
├── server.js                  # Server entry point
├── .env                       # Environment variables
├── .gitignore                 # Ignored files
└── README.md                  # Project documentation
🧪 Postman Testing Guide


📁 Postman Collection
Uploaded both Admin and User Postman collections to GitHub inside a folder named PostmanCollections.

🔧 Admin Testing Flow (Step-by-Step)
Register Admin

URL: http://localhost:5000/api/auth/register

Method: POST

Body (JSON):

json
Copy
Edit
{
  "name": "Admin One",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}


Login as Admin

URL: http://localhost:5000/api/auth/login

Method: POST

Body:

json
Copy
Edit
{
  "email": "admin@example.com",
  "password": "admin123"
}
Get the JWT token from response


Create a Job

URL: http://localhost:5000/api/jobs/

Method: POST

Headers:
Authorization: Bearer <admin-token>

Body:

json
Copy
Edit
{
  "title": "Frontend Developer",
  "description": "React developer needed",
  "company": "CodeX",
  "location": "Remote"
}


Get All Jobs

URL: http://localhost:5000/api/jobs/

Method: GET

Headers:
Authorization: Bearer <admin-token>


Delete a Job

URL: http://localhost:5000/api/jobs/<jobId>

Method: DELETE

Headers:
Authorization: Bearer <admin-token>


Get All Applications

URL: http://localhost:5000/api/applications/

Method: GET

Headers:
Authorization: Bearer <admin-token>


👤 User Testing Flow (Step-by-Step)
Register User

URL: http://localhost:5000/api/auth/register

Method: POST

Body (JSON):

json
Copy
Edit
{
  "name": "Yuvraj Singh",
  "email": "user@example.com",
  "password": "user123",
  "role": "user"
}


Login as User

URL: http://localhost:5000/api/auth/login

Method: POST

Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "user123"
}
Get the JWT token from response


View All Jobs

URL: http://localhost:5000/api/jobs/

Method: GET

Headers:
Authorization: Bearer <user-token>


Apply to a Job

URL: http://localhost:5000/api/applications/<jobId>

Method: POST

Headers:
Authorization: Bearer <user-token>


View My Applications

URL: http://localhost:5000/api/applications/my

Method: GET

Headers:
Authorization: Bearer <user-token>

🧰 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

JWT for authentication

Dev tools: dotenv, nodemon

🙌 Author
Yuvraj Singh
🔗 GitHub Profile

🪪 License
This project is intended for educational and demonstration purposes only.


