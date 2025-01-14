import Rooms from "../models/ManageRoomsModel.js";


export const getAllRooms = async () => await Rooms.getAllRooms();
export const createRoom = async (room) => await Rooms.addRoom(room);
export const updateRoom = async (id, room) => await Rooms.updateRoom(id, room);
export const deleteRoom = async (id) => await Rooms.deleteRoom(id);