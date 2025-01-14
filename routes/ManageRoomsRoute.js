import { Router } from "express";
import { getRooms, createRoom, updateRoom, deleteRoom } from "../controller/ManageRoomsController.js";

const router = Router();

router.get("/rooms", getRooms);
router.post("/createRoom", createRoom);
router.put("/updateRoom/:id", updateRoom);
router.delete("/deleteRoom/:id", deleteRoom);

export default router;
