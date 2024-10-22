'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room

exports.createNewChatRoom = async (req, res, next) => {
    try {
        const { room_name } = req.body; // Lấy room_name từ request body
        const { user_id } = req.user;
        // Tạo phòng mới
        const newRoom = new Room({
            name: room_name,
            members: [user_id], // Có thể thêm thành viên ban đầu tại đây nếu cần
            messages: [],
            owner: user_id,
        });

        // Lưu phòng mới vào database
        await newRoom.save();

        // Trả về thông tin phòng mới, bao gồm _id
        res.status(201).json({ message: 'Room created successfully', room: newRoom });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
