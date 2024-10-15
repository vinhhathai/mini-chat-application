const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageModel = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rooms',
        required: true
    },
    content: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    collection: 'messages',
});

module.exports = mongoose.model('messages', MessageModel);
