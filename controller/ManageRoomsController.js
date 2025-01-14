import * as ManageRooms from "../services/ManageRoomsServices.js";

export const getRooms = async (req, res) =>{
  try {
    const rooms = await ManageRooms.getAllRooms();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const createRoom = async (req, res) => {
  try {
    const room = await ManageRooms.createRoom(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const updateRoom = async (req, res) =>  {
  try {
    const { id } = req.params;
    const room = await ManageRooms.updateRoom(id, req.body);
    res.json(room);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export const deleteRoom = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await ManageRooms.deleteRoom(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export default {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
