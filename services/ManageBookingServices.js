import Booking from "../models/ManageBookingModel.js";

export const getAllBookings = async () => await Booking.getAllBookings();
export const getBookingById = async (id) => await Booking.getBookingById(id);
export const createBooking = async (data) => await Booking.createBooking(data);
export const updateBooking = async (id, data) => await Booking.updateBooking(id, data);
export const deleteBooking = async (id) => await Booking.deleteBooking(id);
