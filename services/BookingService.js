import BookingModel from "../models/BookingModel.js";

const createBooking = async (bookingData) => {
    // Add any business logic or validation here
    const booking = await BookingModel.saveBooking(bookingData);
    return booking;
};

export default { createBooking };
