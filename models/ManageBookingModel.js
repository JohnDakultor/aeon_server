import pool from "../config/db.js";

const getAllBookings = async () => {
  const query = "SELECT * FROM bookings";
  const result = await pool.query(query);
  return result.rows;
};

const getBookingById = async (id) => {
  const query = "SELECT * FROM bookings WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const createBooking = async (bookingData) => {
  const query = `
    INSERT INTO bookings (
      first_name, last_name, email, phone_number, room_type, number_of_guests,
      arrival_date, arrival_time, departure_date, payment_required, payment_method, 
      payment_info, payment_amount
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *;
  `;
  const values = Object.values(bookingData);
  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateBooking = async (id, updatedData) => {
  const fields = Object.keys(updatedData);
  const values = Object.values(updatedData);

  const query = `
    UPDATE bookings 
    SET ${fields.map((field, index) => `${field} = $${index + 1}`).join(", ")}
    WHERE id = $${fields.length + 1}
    RETURNING *;
  `;
  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

const deleteBooking = async (id) => {
  const query = "DELETE FROM bookings WHERE id = $1 RETURNING *";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export default { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking };
