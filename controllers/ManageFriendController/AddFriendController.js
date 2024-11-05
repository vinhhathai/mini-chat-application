const FriendRequestModel = require("../../models/FriendRequestModel");
const UserModel = require("../../models/UserModel");
const { errorCode, errorMessage } = require('../../common/enum/error');

//----------------------------------------------------------------
exports.addFriend = async (req, res) => {
    const { friend_email } = req.body; // Sử dụng email thay vì id
    const { user_id } = req.user;

    // Kiểm tra user_id
    if (!user_id) {
        return res.status(400).json({
            timestamp: new Date().toISOString(),
            path: "/user/add-friend",
            code: errorCode.VALIDATION_FAILED,
            error: { name: errorMessage.ID_NOT_FOUND }
        });
    }

    try {
        // Tìm người dùng hiện tại
        const user = await UserModel.findById(user_id);
        if (!user) {
            return res.status(404).json({
                timestamp: new Date().toISOString(),
                path: "/user/add-friend",
                code: errorCode.DATA_CONFLICT,
                error: { name: errorMessage.USER_NOT_FOUND }
            });
        }

        // Không thể tự gửi yêu cầu kết bạn cho chính mình
        if (user.email === friend_email) { // So sánh bằng email
            return res.status(400).json({
                timestamp: new Date().toISOString(),
                path: "/user/add-friend",
                code: errorCode.VALIDATION_FAILED,
                error: { name: errorMessage.ID_CONFLICT }
            });
        }

        // Tìm người bạn (friend) dựa trên email
        const friend = await UserModel.findOne({ email: friend_email });
        if (!friend) {
            return res.status(404).json({
                timestamp: new Date().toISOString(),
                path: "/user/add-friend",
                code: errorCode.DATA_NOT_FOUND,
                error: { name: errorMessage.USER_NOT_FOUND }
            });
        }

        // Kiểm tra xem yêu cầu kết bạn đã tồn tại
        const existingRequest = await FriendRequestModel.findOne({
            requester: user_id,
            recipient: friend._id // Sử dụng ID của người bạn
        });
        if (existingRequest) {
            return res.status(400).json({
                timestamp: new Date().toISOString(),
                path: "/user/add-friend",
                code: errorCode.VALIDATION_FAILED,
                error: { name: errorMessage.FRIEND_REQUEST_ALREADY_SENT }
            });
        }

        // Tạo yêu cầu kết bạn mới
        const friendRequest = new FriendRequestModel({
            requester: user_id,
            recipient: friend._id, // Sử dụng ID của người bạn
            status: 'pending'
        });
        await friendRequest.save();

        return res.status(201).json({
            message: 'Gửi kết bạn thành công'
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/user/add-friend",
            code: errorCode.ERR_ADD_FRIEND_FAILED,
            error: { name: error.message }
        });
    }
};
