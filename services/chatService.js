// import { Socket } from "socket.io";
// const clients = new Map(); // Stores client sockets
// const admins = new Set(); // Stores admin sockets

// class ChatService {
//   /**
//    * Registers a new client.
//    * @param {string} clientId - The unique ID of the client.
//    * @param {Socket} socket - The client's socket instance.
//    */
//   addClient = (clientId, socket) => {
//     clients.set(clientId, socket);
//   };

//   /**
//    * Registers an admin.
//    * @param {Socket} socket - The admin's socket instance.
//    */
//   addAdmin = (socket) => {
//     admins.add(socket);
//   };

//   /**
//    * Removes a client or admin from the tracking list.
//    * @param {Socket} socket - The socket instance to remove.
//    */
//   removeSocket = (socket) => {
//     clients.forEach((clientSocket, clientId) => {
//       if (clientSocket === socket) clients.delete(clientId);
//     });
//     admins.delete(socket);
//   };

//   /**
//    * Sends a message from a client to all connected admins.
//    * @param {string} clientId - The client's unique ID.
//    * @param {string} message - The message content.
//    */
//   sendMessageFromClient = (clientId, message) => {
//     admins.forEach((adminSocket) =>
//       adminSocket.emit("message", { clientId, sender: "client", message })
//     );
//   };

//   /**
//    * Sends a message from an admin to a specific client.
//    * @param {string} clientId - The client's unique ID.
//    * @param {string} message - The message content.
//    */
//   sendMessageFromAdmin = (clientId, message) => {
//     const clientSocket = clients.get(clientId);
//     if (clientSocket) {
//       clientSocket.emit("message", { sender: "admin", message });
//     }
//   };
// }

// export default new ChatService();


// In-memory storage for messages
const messages = {}; // Store messages per clientId

// Function to store a message
export const storeMessage = (clientId, message) => {
  // Initialize an array for the clientId if not already present
  if (!messages[clientId]) {
    messages[clientId] = [];
  }

  // Save the new message
  const newMessage = { clientId, message, sender: 'user' };
  messages[clientId].push(newMessage);

  return newMessage;
};

// Function to retrieve messages for a specific clientId
export const getMessagesForClient = (clientId) => {
  return messages[clientId] || [];
};
