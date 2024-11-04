const FriendRequestModel = require("../../models/FriendRequestModel");
const UserModel = require("../../models/UserModel");
const { errorCode, errorMessage } = require('../../common/enum/error');


exports.acceptFriendRequest = async (req, res) => {
    const { request_id } = req.body;
    const { user_id } = req.user;

    try {
        const friendRequest = await FriendRequestModel.findById(request_id);
        console.log(friendRequest)
        // Kiểm tra yêu cầu kết bạn có tồn tại và người dùng có phải là người nhận
        if (!friendRequest || friendRequest.recipient.toString() !== user_id) {
            return res.status(404).json({
                timestamp: new Date().toISOString(),
                path: "/user/accept-friend",
                code: errorCode.DATA_NOT_FOUND,
                error: { name: errorMessage.REQUEST_NOT_FOUND }
            });
        }

        // Cập nhật trạng thái yêu cầu kết bạn
        friendRequest.status = 'accepted';
        await friendRequest.save();

        // Thêm bạn bè vào danh sách của hai người dùng
        const requester = await UserModel.findById(friendRequest.requester);
        const recipient = await UserModel.findById(friendRequest.recipient);

        requester.friends.push(recipient._id);
        recipient.friends.push(requester._id);

        await requester.save();
        await recipient.save();

        return res.status(200).json({
            message: 'Friend request accepted'
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/user/accept-friend-request",
            code: errorCode.ERR_ACCEPT_FRIEND_FAILED,
            error: { name: error.message }
        });
    }
};
