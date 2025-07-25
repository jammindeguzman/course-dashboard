# Course Dashboard App

A full-stack course management dashboard built with **Node.js**, **Express**, **MongoDB**, **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

> GitHub Repo: [https://github.com/jammindeguzman/course-dashboard](https://github.com/jammindeguzman/course-dashboard)

---

## Folder Structure

course-dashboard/
├── frontend/ # React + Vite + Tailwind CSS (client)
├── server/ # Node.js + Express + MongoDB (API)
├── README.md

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/jammindeguzman/course-dashboard.git
cd course-dashboard

### 2. Frontend Setup
cd frontend
npm install
npm run dev

Runs on http://localhost:5173 (default Vite dev port)

### 3. Backend Setup
cd server
npm install

### 4. Create .env file inside /server:
PORT=5000
MONGO_URI=your_mongodb_connection_string

### 5. Then run the backend server:
npm run dev

Runs on http://localhost:5000

API Endpoints
GET / - Fetch all courses

Tech Stack
Frontend:
- React + Vite
- TypeScript
- Tailwind CSS
Backend:
- Node.js
- Express
- MongoDB Atlas
- Mongoose

License
This project is open source and available under the MIT License.

Author
GitHub: @jammindeguzman
