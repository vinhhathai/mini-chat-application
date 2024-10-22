'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room

exports.joinRoom = async (req, res, next) => {
    try {
        const { room_id } = req.body; // Lấy room_id từ request body
        const { user_id } = req.user;   // Giả sử user_id được lấy từ token hoặc request

       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
