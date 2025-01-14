import pool from "../config/db.js";

export const findPin = async (pin) => {
  const query = "SELECT * FROM admin_pin WHERE pin = $1";
  const values = [pin];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error finding PIN:", error);
    throw error;
  }
};
