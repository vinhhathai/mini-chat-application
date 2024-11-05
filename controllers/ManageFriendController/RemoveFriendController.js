const FriendRequestModel = require("../../models/FriendRequestModel");
const UserModel = require("../../models/UserModel");
const { errorCode, errorMessage } = require('../../common/enum/error');

exports.removeFriend = async (req, res) => {
    const { friend_id } = req.body;
    const { user_id } = req.user;

    // Kiểm tra user_id
    if (!user_id) {
        return res.status(400).json({
            timestamp: new Date().toISOString(),
            path: "/user/remove-friend",
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
                path: "/user/remove-friend",
                code: errorCode.DATA_NOT_FOUND,
                error: { name: errorMessage.USER_NOT_FOUND }
            });
        }

        // Tìm bạn bè
        const friend = await UserModel.findById(friend_id);
        if (!friend) {
            return res.status(404).json({
                timestamp: new Date().toISOString(),
                path: "/user/remove-friend",
                code: errorCode.DATA_NOT_FOUND,
                error: { name: errorMessage.USER_NOT_FOUND }
            });
        }

        // Kiểm tra xem hai người có phải bạn bè không
        if (!user.friends.includes(friend_id) || !friend.friends.includes(user_id)) {
            return res.status(400).json({
                timestamp: new Date().toISOString(),
                path: "/user/remove-friend",
                code: errorCode.VALIDATION_FAILED,
                error: { name: errorMessage.USER_NOT_FOUND }
            });
        }

        // Xóa bạn bè khỏi danh sách bạn bè của nhau
        user.friends = user.friends.filter(id => id.toString() !== friend_id.toString());
        friend.friends = friend.friends.filter(id => id.toString() !== user_id.toString());

        // Lưu thay đổi
        await user.save();
        await friend.save();

        // Xóa mọi yêu cầu kết bạn còn lại trong FriendRequestModel
        await FriendRequestModel.deleteMany({
            $or: [
                { requester: user_id, recipient: friend_id },
                { requester: friend_id, recipient: user_id }
            ]
        });

        return res.status(200).json({
            message: 'Xóa bạn bè thành công'
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/user/remove-friend",
            code: errorCode.ERR_REMOVE_FRIEND_FAILED,
            error: { name: error.message }
        });
    }
}
