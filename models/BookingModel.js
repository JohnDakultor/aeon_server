import pool from "../config/db.js"; // Import the pool from db.js

const saveBooking = async (bookingData) => {
    const {
      firstName,
      lastName,
      email, // New email field
      phoneNumber, // New phone number field
      roomType,
      numberOfGuests,
      arrivalDate,
      arrivalTime,
      departureDate,
      paymentRequired,
      paymentMethod,
      paymentInfo,
      paymentAmount,
    } = bookingData;
  
    const query = `
    INSERT INTO bookings (
      first_name,
      last_name,
      email,
      phone_number,
      room_type,
      number_of_guests,
      arrival_date,
      arrival_time,
      departure_date,
      payment_required,
      payment_method,
      payment_info,
      payment_amount
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) -- Add $13 for paymentAmount
    RETURNING *;
  `;
  
  const values = [
    firstName,
    lastName,
    email,
    phoneNumber,
    roomType,
    numberOfGuests,
    arrivalDate,
    arrivalTime,
    departureDate,
    paymentRequired,
    paymentMethod,
    paymentInfo,
    paymentAmount,
  ];
  
  
    try {
      const result = await pool.query(query, values); 
      return result.rows[0];
    } catch (error) {
      console.error("Error inserting booking:", error);
      throw error;
    }
  };
  
  export default { saveBooking };
  