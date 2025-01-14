import * as ManageBookingService from "../services/ManageBookingServices.js";

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await ManageBookingService.getAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const booking = await ManageBookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await ManageBookingService.updateBooking(req.params.id, req.body);
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await ManageBookingService.deleteBooking(req.params.id);
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
