import express from "express";
import { getAllData, getAllBookingsData, getAllRooms } from "../controller/DataController.js";

const router = express.Router();

router.get("/Bookings", getAllData);
router.get("/TotalBookings", getAllBookingsData);
router.get("/Rooms", getAllRooms);



export default router;