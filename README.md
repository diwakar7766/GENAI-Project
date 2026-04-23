# YT-GENAI (AI Interview Prep Platform)

A full-stack MERN-style project that helps users prepare for interviews using AI.

Users can:
- register/login with cookie-based auth
- upload resume (PDF) + self description + job description
- generate an AI-powered interview report
- view all past interview reports
- generate an AI-tailored resume PDF

## Tech Stack

### Frontend
- React 19 + Vite
- React Router
- Axios
- SCSS

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT (cookie auth)
- Google GenAI SDK
- Multer + pdf-parse
- Puppeteer (PDF generation)

## Project Structure

```text
YT-GENAI/
	backend/
		server.js
		Src/
			app.js
			config/database.js
			controller/
			middlewares/
			models/
			routes/
			services/ai.service.js
	frontend/
		src/
			Features/
				auth/
				interview/
```

## Environment Variables

Create a file: `backend/.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

## Installation

From project root, install dependencies in both apps:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Run The Project

Use two terminals.

### 1) Start backend

```bash
cd backend
npm run dev
```

Backend runs on: `http://localhost:3000`

### 2) Start frontend

```bash
cd frontend
npm run dev
```

Frontend runs on: `http://localhost:5173`

## API Overview

### Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/logout`
- `GET /api/auth/get-me` (protected)

### Interview Routes
- `POST /api/interview/` (protected, multipart form-data with `resume`)
- `GET /api/interview/` (protected)
- `GET /api/interview/report/:interviewId` (protected)
- `POST /api/interview/resume/pdf/:interviewReportId` (protected)

## Main Workflow

1. User registers/logs in.
2. Auth token is stored in HTTP cookie.
3. User submits job description + self description + resume PDF.
4. Backend parses resume and calls Google GenAI.
5. Interview report is saved in MongoDB.
6. User can open report details and download generated resume PDF.

## Notes

- CORS is currently configured for `http://localhost:5173`.
- Backend default port is hardcoded to `3000` in `backend/server.js`.
- Frontend API URLs are currently hardcoded to `http://localhost:3000`.

## Available Scripts

### Backend (`backend/package.json`)
- `npm run dev` -> start backend with nodemon

### Frontend (`frontend/package.json`)
- `npm run dev` -> start Vite dev server
- `npm run build` -> production build
- `npm run lint` -> run ESLint
- `npm run preview` -> preview production build
# GENAI-Project
