'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room

exports.createNewChatRoom = async (req, res, next) => {
    try {
        const { room_name } = req.body;
        const { user_id } = req.user;
        const avatarPath = req.file ? `/upload/roomImage/${req.file.filename}` : '/upload/roomImage/vinh0982.jpg'; // Get avatar file path if uploaded

        // Tạo phòng mới
        const newRoom = new Room({
            name: room_name,
            members: [user_id], 
            messages: [],
            owner: user_id,
            image: avatarPath, 
        });

        // Lưu phòng mới vào database
        await newRoom.save();

        // Trả về thông tin phòng mới, bao gồm _id và avatar
        res.status(201).json({ message: 'Room created successfully', room: newRoom });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
