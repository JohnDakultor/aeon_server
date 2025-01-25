import FullBookingController from "../controller/FullBookingController.js";
import express from "express";

const router = express.Router();

router.get("/check-availability/:roomType", FullBookingController.checkRoomAvailability);

export default router;


