const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessageSchema = new Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Ref tên Model
    content: { type: String, required: true }
}, {
    timestamps: true,
    collection: 'messages'
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
