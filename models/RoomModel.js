const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomSchema = new Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // Ref tên Model
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],  // Ref tên Model
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    private: { type: Boolean, default: false },
    image: { type: String }, 
}, {
    timestamps: true,
    collection: 'rooms'
});

const RoomModel = mongoose.model('Room', RoomSchema);

module.exports = RoomModel;
