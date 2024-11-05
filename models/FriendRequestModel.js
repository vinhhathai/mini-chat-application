const mongoose = require('mongoose');
const { Schema } = mongoose;

const FriendRequestSchema = new Schema({
    requester: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' }
}, {
    timestamps: true,
    collection: 'friend_requests'
});

const FriendRequestModel = mongoose.model('FriendRequest', FriendRequestSchema);
module.exports = FriendRequestModel;
