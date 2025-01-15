import pool from "../config/db.js";

const getBookings = async () => {
  const query = `SELECT * FROM bookings`; // Fetch all booking data
  const result = await pool.query(query);
  return result.rows;
};

const countTotalBookings = async () => {
  const query = `SELECT COUNT(*) AS totalBookings FROM bookings`; // Count total bookings
  const result = await pool.query(query);
  return result.rows[0].totalBookings;
};

const getRooms = async () => {
    const query = `SELECT * FROM rooms`; // Fetch all room data
    const result = await pool.query(query);
    
    // Count the number of available rooms (where available is true)
    const availableRooms = result.rows.filter(room => room.available === true).length;
  
    return { totalRooms: result.rows.length, availableRooms };
  };
  



export default { getBookings, countTotalBookings, getRooms };
