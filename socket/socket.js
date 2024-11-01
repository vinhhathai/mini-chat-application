const User = require('../models/UserModel');
const Room = require('../models/RoomModel');
const Message = require('../models/MessageModel');

let usersOnline = {};

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('joinRoom', async ({ roomId, userId }) => {
            console.log(`User ${userId} joining room ${roomId}`);
            socket.join(roomId);
            usersOnline[userId] = socket.id;

            await User.findByIdAndUpdate(userId, { isActive: true });
            io.to(roomId).emit('userOnline', { userId, status: 'online' });
        });

        socket.on('chatMessage', async ({ roomId, message }) => {
            console.log(message)
            console.log(`Received message from room ${roomId}:`, message);
            const newMessage = new Message(message);
            await newMessage.save();
            io.to(roomId).emit('message', newMessage);
        });

        socket.on('disconnect', async () => {
            console.log('User disconnected:', socket.id);
            let userId = Object.keys(usersOnline).find(key => usersOnline[key] === socket.id);
            if (userId) {
                await User.findByIdAndUpdate(userId, { isActive: false });
                delete usersOnline[userId];
                io.emit('userOffline', { userId });
            }
        });
    });
};

