import { verifyPin } from "../services/authService.js";

export const login = async (req, res) => {
  const { pin } = req.body;

  if (!pin || pin.length !== 6) {
    return res.status(400).json({ success: false, message: "Invalid PIN format." });
  }

  try {
    await verifyPin(pin);
    res.json({ success: true, message: "Login successful." });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};
