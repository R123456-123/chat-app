Chatter a Chat App

A full-stack real-time chat application with user authentication, instant messaging, and live presence detection.

## Features

- Secure user authentication (JWT + bcryptjs)
- Real-time messaging with Socket.io
- User search and contact management
- Profile management with image upload (Cloudinary)
- Online/offline status tracking
- Text and image messaging
- Unread message indicators
- Responsive design with Tailwind CSS

## Tech Stack

**Frontend**: React 19, Vite, React Router, Tailwind CSS, Socket.io Client, Axios

**Backend**: Node.js, Express, MongoDB, Mongoose, Socket.io, JWT, bcryptjs, Cloudinary

## Project Structure

```
chat-app/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── lib/
│   ├── package.json
│   └── vite.config.js
├── server/              # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
└── README.md
```

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary account

### Backend Setup

```bash
cd server
npm install
```

Create `.env`:

```
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
```

Run: `npm run server`

### Frontend Setup

```bash
cd client
npm install
```

Create `.env`:

```
VITE_API_URL=http://localhost:5000
```

Run: `npm run dev`

Visit `http://localhost:5173`

## Scripts

**Client**: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`

**Server**: `npm start`, `npm run server`

## API Endpoints

| Method | Endpoint                        | Description       |
| ------ | ------------------------------- | ----------------- |
| POST   | `/api/users/signup`             | Register user     |
| POST   | `/api/users/login`              | Authenticate user |
| GET    | `/api/users/:id`                | Get profile       |
| PUT    | `/api/users/:id`                | Update profile    |
| POST   | `/api/messages`                 | Send message      |
| GET    | `/api/messages/:conversationId` | Get messages      |

## Deployment

Deploy to Vercel using the included `vercel.json` configurations.
