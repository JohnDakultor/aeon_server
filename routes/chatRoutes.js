import express from 'express';
import { sendMessage, getMessages } from '../controller/chatController.js';

const router = express.Router();

// Middleware to add io instance to the request object
router.use((req, res, next) => {
  req.io = req.app.get('io'); // Assuming io is stored globally
  next();
});

// Route to send a message
router.post('/chat', sendMessage);

// Route to fetch messages for a specific clientId
router.get('/chat/:clientId', getMessages);

export default router;

