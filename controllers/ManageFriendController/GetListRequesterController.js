const FriendRequestModel = require('../../models/FriendRequestModel'); // Model cho FriendRequest
const UserModel = require('../../models/UserModel');

// Lấy danh sách lời mời kết bạn
exports.getFriendRequests = async (req, res) => {
    const { user_id } = req.user;

    try {
        // Tìm các lời mời kết bạn có recipient là user_id và trạng thái là "pending"
        const friendRequests = await FriendRequestModel.find({
            recipient: user_id,
            status: 'pending'
        }).populate('requester', 'fullName email profilePicture'); // Populate thêm thông tin người gửi

        return res.status(200).json({
            message: 'Friend requests fetched successfully',
            friendRequests
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/user/friend-requests",
            code: errorCode.ERR_FETCH_FRIEND_REQUESTS_FAILED,
            error: {
                name: error.message
            }
        });
    }
};
