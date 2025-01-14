import { findPin } from "../models/pinModel.js";

export const verifyPin = async (pin) => {
  const pinData = await findPin(pin);
  if (!pinData) {
    throw new Error("Invalid PIN.");
  }
  return pinData;
};
