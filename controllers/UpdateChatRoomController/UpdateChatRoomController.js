const RoomModel = require('../../models/RoomModel');

// Cập nhật tên phòng
// Cập nhật tên phòng
exports.updateRoomName = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const { user_id } = req.user;
console.log(name)
    // Validate the `name` field
    if (!name) {
        return res.status(400).json({
            status: false,
            message: "Tên phòng là bắt buộc",
        });
    }

    try {
        const room = await RoomModel.findById(id);

        if (!room) {
            return res.status(404).json({
                status: false,
                message: "Phòng không tồn tại",
            });
        }

        // Kiểm tra nếu người dùng không phải là chủ phòng
        if (room.owner.toString() !== user_id) {
            return res.status(403).json({
                status: false,
                message: "Bạn không có quyền cập nhật tên phòng này",
            });
        }

        room.name = name;
        await room.save();

        return res.status(200).json({
            status: true,
            message: "Cập nhật tên phòng thành công",
            data: {
                _id: room._id,
                name: room.name,
            },
        });
    } catch (error) {
        console.error("Lỗi khi cập nhật tên phòng:", error);
        return res.status(500).json({
            status: false,
            message: "Lỗi nội bộ",
            error: error.message,
        });
    }
};


// Cập nhật avatar phòng
exports.updateRoomAvatar = async (req, res) => {
    const { id } = req.params;
    const avatarPath = req.file ? `/upload/roomImage/${req.file.filename}` : null;
    const {user_id} = req.user;

    try {
        const room = await RoomModel.findById(id);

        if (!room) {
            return res.status(404).json({
                status: false,
                message: "Phòng không tồn tại",
            });
        }

        // Kiểm tra nếu người dùng không phải là chủ phòng
        if (room.owner.toString() !== user_id) {
            return res.status(403).json({
                status: false,
                message: "Bạn không có quyền cập nhật avatar phòng này",
            });
        }

        if (avatarPath) {
            room.image = avatarPath;
            console.log(room)
        }

        await room.save();

        return res.status(200).json({
            status: true,
            message: "Cập nhật avatar phòng thành công",
            data: room,
        });
    } catch (error) {
        console.error("Lỗi khi cập nhật avatar phòng:", error);
        return res.status(500).json({
            status: false,
            message: "Lỗi nội bộ",
            error: error.message,
        });
    }
};
