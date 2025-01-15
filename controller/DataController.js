import * as DataService from "../services/DataService.js";

export const getAllData = async (req, res) => {
    try {
        const data = await DataService.getAllData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllBookingsData = async (req, res) => {
    try {
      const data = await DataService.getAllBookingsData();
      res.json(data); // Return both total bookings and bookings list
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getAllRooms = async (req, res) => {
    try {
      const rooms = await DataService.getRooms();
      res.json(rooms); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  