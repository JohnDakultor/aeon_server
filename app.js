import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/BookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import manageBookingRoutes from "./routes/ManageBookingRoutes.js";
import manageRoomRoutes from "./routes/ManageRoomsRoute.js";
import dataRoutes from "./routes/DataRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import http from 'http';
import { Server } from 'socket.io';
import { storeMessage } from "./services/chatService.js";

let messages = {};


const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:5173"],
        methods: ["GET", "POST"],
    },
})

app.set('io', io);

let users = {}; // To store socket IDs of clients

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
    
    // When a user connects, store their socket ID
    socket.on('user_connected', () => {
      users[socket.id] = socket.id;
      console.log(`User with socket id ${socket.id} connected`);
      io.emit("user_connected", socket.id); // Emit the user socket ID to the admin
    });
  
    // When an admin connects
    socket.on('admin_connected', () => {
      console.log(`Admin with socket id ${socket.id} connected`);
    });
  
    // When a user sends a message
    socket.on('send_message', (message) => {
        console.log('Received message from user:', message);
        const messageText = message.message || ""; // Extract the actual text
        io.emit('message', { text: messageText, sender: 'user' }); // Send only the relevant fields
      });
      
  
    // When an admin sends a message back to a user
    socket.on('send_message_admin', ({ socketId, message }) => {
      console.log('Received message from admin:', message, 'to user socketId:', socketId);
      // Emit message directly to the user using their socket ID
      io.to(socketId).emit('message', { text: message, sender: 'admin' });
    });
  
    // Clean up when a user disconnects
    socket.on('disconnect', () => {
      console.log(`User with socket id ${socket.id} disconnected`);
      delete users[socket.id]; // Optionally remove from users map
    });
  });

  

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(cors());

// Routes
app.use("/api", bookingRoutes);
app.use("/api", authRoutes);
app.use("/api", manageBookingRoutes);
app.use("/api", manageRoomRoutes);
app.use("/api", dataRoutes);
app.use("/api", chatRoutes);



// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
