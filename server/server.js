import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

// create express app and http server
const app = express();
const server = http.createServer(app);

// socket.io setup
export const io = new Server(server, {
    cors: { origin: "*" }
})

// store online users
export const userSocketMap = {}; // {userId: socketId}

// Socket.io connection
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId);

    if (userId) userSocketMap[userId] = socket.id;

    // emit  online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User Disconnected", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

//middlewares
app.use(cors());
app.use(express.json({ limit: '4mb' }));

// return empty success for favicon requests to avoid browser 404 logs
app.use('/favicon.ico', (req, res) => res.sendStatus(204));

app.use("/api/status", (req, res) => { res.send("Server is running") });
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)

await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT:", PORT));
