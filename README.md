# Job Application Tracker

A full-stack MERN application built for the InternSathi Full Stack Internship Assignment. The application allows users to track job applications through different stages of the hiring process.

## Live Demo

Frontend: https://job-tracker-sand-sigma.vercel.app

Backend API: https://job-tracker-yo6i.onrender.com

## Features

### Core Features

* View all job applications
* Add new applications
* Edit existing applications
* Delete applications with confirmation
* Filter applications by status
* Search applications by company name or job title

### Application Fields

* Company Name
* Job Title
* Job Type (Internship, Full-time, Part-time)
* Status (Applied, Interviewing, Offer, Rejected)
* Applied Date
* Notes
* Created At
* Updated At

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Project Structure

```text
job-application-tracker/

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Prerequisites

* Node.js
* npm
* MongoDB Atlas account

### Clone Repository

```bash
git clone https://github.com/IshanTandukar/job-tracker.git

cd job-tracker
```

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a .env file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a .env file:

```env
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Documentation

### Get All Applications

```http
GET /applications
```

### Get Single Application

```http
GET /applications/:id
```

### Create Application

```http
POST /applications
```

### Update Application

```http
PATCH /applications/:id
```

### Delete Application

```http
DELETE /applications/:id
```

## Environment Variables

### Backend

```env
PORT=
MONGO_URI=
```

### Frontend

```env
VITE_API_URL=
```

## Screenshots


### Dashboard


<img width="1274" height="942" alt="image" src="https://github.com/user-attachments/assets/048e80ce-0885-4495-aa5d-b81e79904792" />

### Add Application Modal


<img width="926" height="688" alt="image" src="https://github.com/user-attachments/assets/3300b306-dcec-44cf-84be-32a3d4d449e9" />

### Edit Application

<img width="1801" height="834" alt="image" src="https://github.com/user-attachments/assets/ac7883cc-fbb4-495c-8855-f48e50d86c5b" />

### Delete Application
<img width="1858" height="983" alt="image" src="https://github.com/user-attachments/assets/fc813068-f90c-4b3f-8733-ea9250d85f9d" />

### Filter and Search
<img width="1903" height="806" alt="image" src="https://github.com/user-attachments/assets/1dad732c-5427-4e97-ab30-f1710c3af952" />

<img width="1908" height="739" alt="image" src="https://github.com/user-attachments/assets/83ea4a07-b867-44eb-815a-806db4604cd2" />



## Demo Video

Demo Video Link: https://drive.google.com/file/d/13ZArYi9jO1qvEaoKncZeKdljfVWfS6Ec/view?usp=sharing




