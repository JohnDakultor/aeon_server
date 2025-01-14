import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/BookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import manageBookingRoutes from "./routes/ManageBookingRoutes.js";

const app = express();

// Middleware
app.use(express.json()); // Built-in JSON parser
app.use(cors());

// Routes
app.use("/api", bookingRoutes);
app.use("/api", authRoutes);
app.use("/api", manageBookingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
