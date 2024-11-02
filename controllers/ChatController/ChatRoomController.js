'use strict';
//----------------------------------------------------------------


const Room = require('../../models/RoomModel');
const Message = require('../../models/MessageModel');

exports.createRoom = async (req, res) => {
  const { name, members } = req.body;
  const room = new Room({ name, members });
  await room.save();
  res.status(201).json(room);
};

exports.getRoomMessages = async (req, res) => {
  const { roomId } = req.params;
  const room = await Room.findById(roomId).populate('messages');
  res.status(200).json(room.messages);
};
