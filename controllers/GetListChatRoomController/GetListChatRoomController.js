'use strict';
//----------------------------------------------------------------
const Room = require('../../models/RoomModel'); // Import model Room


// API: Lấy danh sách phòng chat mà người dùng là chủ hoặc thành viên
exports.getRoomsByOwnerOrMember = async (req, res, next) => {
    try {
        const { user_id } = req.user; // Lấy ID người dùng từ request

        // Tìm các phòng mà người dùng là owner hoặc thành viên
        const rooms = await Room.find({
            $or: [
                { owner: user_id },              // Là owner
                { members: user_id }             // Là member
            ]
        })
            .populate('members', 'fullName')  // Populate thông tin username của các thành viên
            .populate('owner', 'fullName')    // Populate thông tin username của chủ phòng
            .exec();

        // Trả về danh sách phòng chat
        res.status(200).json({ message: 'Rooms fetched successfully', rooms });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// API: Lấy thông tin phòng chat theo ID
exports.getChatRoomById = async (req, res, next) => {
    try {
        const { id } = req.params; // Lấy ID từ request parameters

        // Tìm phòng chat theo ID
        const room = await Room.findById(id)
            .populate('members', 'fullName')  // Populate thông tin username của các thành viên
            .populate('owner', 'fullName')    // Populate thông tin username của chủ phòng
            .exec();

        // Kiểm tra nếu không tìm thấy phòng chat
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Trả về thông tin phòng chat
        res.status(200).json({ message: 'Room fetched successfully', room });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
