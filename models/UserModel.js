const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    resetOtp: { type: Number },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],  // Ref tên Model
    isActive: { type: Boolean, default: false },
    room: [{ type: mongoose.Types.ObjectId, ref: 'Room' }],  // Ref tên Model
    profilePicture: { type: String }
}, {
    timestamps: true,
    collection: 'users'  // Tên collection trực tiếp vẫn được giữ nguyên
});

const UserModel = mongoose.model('User', UserSchema);  // Sử dụng tên model số ít

module.exports = UserModel;
