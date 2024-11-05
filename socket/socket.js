// services/socket.js

const User = require('../models/UserModel');
const Room = require('../models/RoomModel');
const Message = require('../models/MessageModel');

let usersOnline = {};

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        // Sự kiện tham gia phòng
        socket.on('joinRoom', async ({ roomId, userId }) => {
            try {
                const room = await Room.findById(roomId);
                if (room && room.members.includes(userId)) {
                    console.log(`User ${userId} joining room ${roomId}`);
                    socket.join(roomId);
                    usersOnline[userId] = socket.id;
                    await User.findByIdAndUpdate(userId, { isActive: true });
                    io.to(roomId).emit('userOnline', { userId, status: 'online' });
                } else {
                    console.log(`User ${userId} is not a member of room ${roomId}`);
                }
            } catch (error) {
                console.error(`Error in joinRoom event: ${error.message}`);
            }
        });

        // Sự kiện tạo phòng riêng tư
        socket.on('createPrivateRoom', async ({ userId1, userId2 }) => {
            try {
                // Kiểm tra xem phòng riêng tư đã tồn tại chưa
                const existingRoom = await Room.findOne({
                    private: true,
                    members: { $all: [userId1, userId2] } // Kiểm tra cả hai thành viên có trong danh sách
                });

                if (existingRoom) {
                    // Nếu đã tồn tại, tham gia vào phòng đó
                    socket.join(existingRoom._id);
                    io.to(userId1).emit('roomJoined', existingRoom);
                    io.to(userId2).emit('roomJoined', existingRoom);
                    console.log(`Both users joined existing private room: ${existingRoom._id}`);
                } else {
                    // Tạo phòng riêng tư mới
                    const room = await Room.create({
                        name: `Private Room: ${userId1} & ${userId2}`,
                        members: [userId1, userId2],
                        private: true,
                        owner: userId1 // hoặc userId2 tùy ý
                    });

                    socket.join(room._id);
                    usersOnline[userId1] = socket.id;
                    usersOnline[userId2] = socket.id;

                    // Thông báo cho người dùng
                    io.to(userId1).emit('roomCreated', room);
                    io.to(userId2).emit('roomCreated', room);
                    console.log(`New private room created: ${room._id}`);
                }
            } catch (error) {
                console.error(`Error in createPrivateRoom event: ${error.message}`);
            }
        });

        // Sự kiện gửi tin nhắn
        socket.on('chatMessage', async ({ roomId, message }) => {
            try {
                // Tìm phòng để kiểm tra loại phòng
                const room = await Room.findById(roomId);
                if (!room) {
                    console.error(`Room with id ${roomId} not found.`);
                    return;
                }

                console.log(`Received message from room ${roomId}:`, message);

                const newMessage = new Message({
                    ...message,
                    roomId: roomId,
                });

                await newMessage.save();

                await Room.findByIdAndUpdate(roomId, {
                    $push: { messages: newMessage._id }
                });

                // Phát tin nhắn mới cho tất cả thành viên trong phòng
                io.to(roomId).emit('message', {
                    newMessage: newMessage,
                    senderName: message.senderName,
                    avatar: message.avatar,
                    roomType: room.private ? 'private' : 'group' // Thêm thuộc tính roomType
                });
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        });

        // Sự kiện ngắt kết nối
        socket.on('disconnect', async () => {
            try {
                console.log('User disconnected:', socket.id);
                let userId = Object.keys(usersOnline).find(key => usersOnline[key] === socket.id);
                if (userId) {
                    await User.findByIdAndUpdate(userId, { isActive: false });
                    delete usersOnline[userId];
                    io.emit('userOffline', { userId });
                }
            } catch (error) {
                console.error(`Error in disconnect event: ${error.message}`);
            }
        });
    });
};
