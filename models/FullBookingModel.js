import pool from "../config/db.js";



export const getBookingsForRoom = async (roomType) => {
    try {
      const query = `
        SELECT arrival_date, departure_date
        FROM bookings
        WHERE room_type = $1;
      `;
      const values = [roomType];
      const { rows } = await pool.query(query, values);
      
      return rows; // Return the list of bookings (arrival_date, departure_date)
    } catch (error) {
      throw new Error('Error fetching bookings: ' + error.message);
    }
  };

export default { getBookingsForRoom };
