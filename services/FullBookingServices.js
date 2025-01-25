import fullyBooked from "../models/FullBookingModel.js";


export const FullyBooked = async (roomType) => await fullyBooked.getBookingsForRoom(roomType);

