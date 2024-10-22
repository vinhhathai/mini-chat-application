'use strict';
//----------------------------------------------------------------
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    resetOtp: { type: Number },
    password: { type: String, required: true },
    fullName: { type: String, required: true, },
    friends: [{ type: mongoose.Types.ObjectId, ref: 'friends' }],
    room: [{ type: mongoose.Types.ObjectId, ref: 'rooms' }],
    profilePicture: { type: String }
}, {
    timestamps: true,
    collection: 'users'
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
