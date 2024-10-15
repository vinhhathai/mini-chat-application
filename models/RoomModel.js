const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomModel = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    }],
   
},{
    timestamps: true,
    collection: 'rooms'
});

module.exports = mongoose.model('rooms', RoomModel);
