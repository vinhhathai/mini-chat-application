const FriendRequestModel = require("../../models/FriendRequestModel");
const UserModel = require("../../models/UserModel");
const { errorCode, errorMessage } = require('../../common/enum/error');

exports.declineFriendRequest = async (req, res) => {
    const { request_id } = req.body;
    const { user_id } = req.user;

    try {
        const friendRequest = await FriendRequestModel.findById(request_id);

        // Kiểm tra yêu cầu kết bạn có tồn tại và người dùng có phải là người nhận
        if (!friendRequest || friendRequest.recipient.toString() !== user_id) {
            return res.status(404).json({
                timestamp: new Date().toISOString(),
                path: "/user/decline-friend-request",
                code: errorCode.DATA_NOT_FOUND,
                error: { name: errorMessage.REQUEST_NOT_FOUND }
            });
        }

        // Cập nhật trạng thái yêu cầu kết bạn
        friendRequest.status = 'declined';
        await friendRequest.save();

        return res.status(200).json({
            message: 'Friend request declined'
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/user/decline-friend-request",
            code: errorCode.ERR_DECLINE_FRIEND_FAILED,
            error: { name: error.message }
        });
    }
};
