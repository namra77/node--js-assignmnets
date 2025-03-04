
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Track online users
let onlineUsers = 0;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('A user connected');
  onlineUsers++; // Increment online users count
  io.emit('update online users', onlineUsers); // Broadcast the updated count

  // Handle chat messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast the message to all clients
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    onlineUsers--; // Decrement online users count
    io.emit('update online users', onlineUsers); // Broadcast the updated count
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});