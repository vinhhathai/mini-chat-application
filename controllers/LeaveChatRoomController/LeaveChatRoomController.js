'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room
const User = require('../../models/UserModel'); // Import model User

exports.leaveRoom = async (req, res, next) => {
    const { roomId } = req.body;  // ID của phòng chat
    const { user_id } = req.user;  // ID của user (lấy từ token hoặc session)

    try {
        // Tìm phòng chat theo roomId
        let room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Kiểm tra nếu user là chủ phòng
        if (room.owner.toString() === user_id) {
            return res.status(400).json({ message: 'Không thể rời phòng nếu bạn là chủ phòng!' });
        }

        // Kiểm tra nếu người dùng chưa tham gia phòng
        if (!room.members.includes(user_id)) {
            return res.status(400).json({ message: 'You are not a member of this room' });
        }

        // Xóa người dùng khỏi danh sách members của phòng
        room.members = room.members.filter(member => member.toString() !== user_id);
        await room.save();

        // Cập nhật danh sách phòng của người dùng
        let user = await User.findById(user_id);
        user.room = user.room.filter(room => room.toString() !== roomId);
        await user.save();

        res.status(200).json({ message: 'Left room successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
