import { Router } from "express";
import BookingController from "../controller/BookingController.js";

const router = Router();

router.post("/submit-form", BookingController.submitBooking);

export default router;
