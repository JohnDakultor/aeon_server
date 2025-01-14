import  BookingService from "../services/BookingService.js";

const submitBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const booking = await BookingService.createBooking(bookingData);
        res.status(201).json({ success: true, data: booking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export default { submitBooking };
