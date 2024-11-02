'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room
const User = require('../../models/UserModel'); // Import model Room


exports.joinRoom = async (req, res, next) => {
    const { roomId } = req.body;  // ID của phòng chat
    const { user_id } = req.user;  // ID của user (lấy từ token hoặc session)

    try {
        // Tìm phòng chat theo roomId
        let room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Kiểm tra nếu người dùng đã tham gia phòng
        if (room.members.includes(user_id)) {
            return res.status(400).json({ message: 'You have already joined this room' });
        }

        // Thêm người dùng vào danh sách members của phòng
        room.members.push(user_id);
        await room.save();

        // Cập nhật danh sách phòng của người dùng
        let user = await User.findById(user_id);
        user.room.push(roomId);
        await user.save();

        res.status(200).json({ message: 'Joined room successfully', room });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }

};
