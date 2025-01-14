import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/BookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import manageBookingRoutes from "./routes/ManageBookingRoutes.js";
import manageRoomRoutes from "./routes/ManageRoomsRoute.js";

const app = express();

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(cors());

// Routes
app.use("/api", bookingRoutes);
app.use("/api", authRoutes);
app.use("/api", manageBookingRoutes);
app.use("/api", manageRoomRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
