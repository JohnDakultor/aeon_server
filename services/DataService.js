import Data from "../models/DataModel.js";

export const getAllData = async () => await Data.getAllData();

export const getAllBookingsData = async () => {
    const bookings = await Data.getBookings();
    const totalBookings = await Data.countTotalBookings();
    return { bookings, totalBookings };
  };

 export const getAllRooms = async () => await Data.getRooms();