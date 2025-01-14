import express from "express";
import {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controller/ManageBookingController.js";

const router = express.Router();

router.get("/bookings", getAllBookings);
router.post("/bookings/create", createBooking);
router.put("/bookings/:id", updateBooking);
router.delete("/bookings/:id", deleteBooking);

export default router;
