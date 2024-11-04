"use strict";
//----------------------------------------------------------------
const Room = require("../../models/RoomModel"); // Import model Room
const Message = require("../../models/MessageModel"); // Import model Message nếu cần xoá messages liên quan

// API: Xoá phòng chat (chỉ owner mới có quyền xoá)
exports.deleteChatRoom = async (req, res, next) => {
  try {
    const { user_id } = req.user; // Lấy ID người dùng từ request
    const { id } = req.params; // Lấy ID phòng từ params

    // Tìm phòng chat theo ID
    const room = await Room.findById(id);

    // Kiểm tra nếu phòng tồn tại
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    // Kiểm tra quyền xoá của người dùng
    if (room.owner.toString() !== user_id) {
      return res.status(403).json({ message: "Bạn không có quyền xoá phòng này" });
    }

    // Xoá phòng chat
    await Room.findByIdAndDelete(id);

    // (Tuỳ chọn) Xoá các tin nhắn liên quan đến phòng chat nếu cần thiết
    await Message.deleteMany({ roomId: id });

    res.status(200).json({ message: "Xoá thành công" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
