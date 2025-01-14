import pool from "../config/db.js";

export const getAllRooms = async() => {
  const query = "SELECT * FROM rooms";
  const result = await pool.query(query);
  return result.rows;
}

export const addRoom = async (roomData) => {
  const { name, capacity, price, available } = roomData;
  const { rows } = await pool.query(
    `INSERT INTO rooms (name, capacity, price, available) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, capacity, price, available]
  );
  return rows[0];
}

export const updateRoom = async(id, roomData) => {
  const { name, capacity, price, available } = roomData;
  const { rows } = await pool.query(
    `UPDATE rooms SET 
       name = $1, 
       capacity = $2, 
       price = $3, 
       available = $4 
     WHERE id = $5 RETURNING *`,
    [name, capacity, price, available, id]
  );

  if (!rows[0]) {
    throw new Error("Room not found");
  }
  return rows[0];
}

export const deleteRoom = async(id) => {
  const { rowCount } = await pool.query("DELETE FROM rooms WHERE id = $1", [id]);
  if (rowCount === 0) {
    throw new Error("Room not found");
  }
  return { message: "Room deleted successfully" };
}

export default {
  getAllRooms,
  addRoom,
  updateRoom,
  deleteRoom,
};
