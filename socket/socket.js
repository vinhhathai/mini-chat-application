const User = require('../models/UserModel');
const Room = require('../models/RoomModel');
const Message = require('../models/MessageModel');

let usersOnline = {};

module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // User joins a room
        socket.on('joinRoom', async ({ roomId, userId }) => {
            socket.join(roomId);
            usersOnline[userId] = socket.id;
            console.log(userId, "Joined", "to ", roomId )

            // Cập nhật trạng thái online của user
            await User.findByIdAndUpdate(userId, { isActive: true });

            // Phát hiện tất cả thành viên trong phòng
            io.to(roomId).emit('userOnline', { userId, status: 'online' });
        });

        // Nhận tin nhắn từ client
        socket.on('chatMessage', async ({ roomId, message }) => {
            const newMessage = new Message(message);
            await newMessage.save();

            io.to(roomId).emit('message', newMessage);
        });

        // User disconnect
        socket.on('disconnect', async () => {
            let userId = Object.keys(usersOnline).find(key => usersOnline[key] === socket.id);
            if (userId) {
                await User.findByIdAndUpdate(userId, { isActive: false });
                delete usersOnline[userId];

                console.log("user disconnected")

                io.emit('userOffline', { userId });
            }
        });
    });
};
