import * as bookingService from '../services/FullBookingServices.js';

export const checkRoomAvailability = async (req, res) => {
    const { roomType } = req.params; // Room type passed as a URL parameter
    try {
      const bookings = await bookingService.FullyBooked(roomType);
      const unavailableDates = bookings.map(booking => {
        return {
          arrivalDate: booking.arrival_date,
          departureDate: booking.departure_date,
        };
      });
      res.json({ unavailableDates });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch unavailable dates' });
    }
  };

export default { checkRoomAvailability };