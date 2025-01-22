// import chatService from "../services/chatService.js";

// const chatController = (io) => {
//   io.on("connection", (socket) => {
//     console.log(`User connected: ${socket.id}`);

//     // Handle client registration
//     socket.on("register_client", (clientId) => {
//       chatService.addClient(clientId, socket);
//       console.log(`Client registered: ${clientId}`);
//     });

//     // Handle admin registration
//     socket.on("register_admin", () => {
//       chatService.addAdmin(socket);
//       console.log("Admin registered");
//     });

//     // Handle client message
//     socket.on("client_message", ({ clientId, message }) => {
//       console.log(`Message from client (${clientId}): ${message}`);
//       chatService.sendMessageFromClient(clientId, message);
//     });

//     // Handle admin message
//     socket.on("admin_message", ({ clientId, message }) => {
//       console.log(`Message from admin to client (${clientId}): ${message}`);
//       chatService.sendMessageFromAdmin(clientId, message);
//     });

//     // Handle disconnection
//     socket.on("disconnect", () => {
//       console.log(`User disconnected: ${socket.id}`);
//       chatService.removeSocket(socket);
//     });
//   });
// };

// export default chatController;
import { storeMessage, getMessagesForClient } from '../services/chatService.js';

// Controller to handle sending a new message
export const sendMessage = (req, res) => {
  const { clientId, message } = req.body;

  // Store the message using the service
  const newMessage = storeMessage(clientId, message);

  // Emit the message to the admin
  req.io.emit('message', newMessage);

  res.status(200).send({ message: 'Message sent' });
};

// Controller to handle fetching messages for a specific clientId
export const getMessages = (req, res) => {
  const { clientId } = req.params;

  // Retrieve messages for the given clientId using the service
  const clientMessages = getMessagesForClient(clientId);

  res.status(200).json({ messages: clientMessages });
};
