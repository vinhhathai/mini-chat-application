'use strict';
//----------------------------------------------------------------
var express = require('express');
var router = express.Router();
const CreateChatRoomController = require('../../controllers/CreateChatRoomController/CreateChatRoomController');
const GetListChatRoomController = require('../../controllers/GetListChatRoomController/GetListChatRoomController');
const JoinRoomController = require('../../controllers/JoinRoomController/JoinRoomController');
// var ChatRoomController = require('../../controllers/ChatController/ChatRoomController')



//POST Create chat room
router.post('/create-room', CreateChatRoomController.createNewChatRoom)

//GET Get list of chat rooms
router.get('/room', GetListChatRoomController.getRoomsByOwnerOrMember)

//GET room  by id
router.get('/room/:id', GetListChatRoomController.getChatRoomById)







// /* POST Join Chat with one user */
// // router.get('/room/:id', ChatRoomController.chatMessageToRoom);



//get chat room

// //join chat room
// router.get('/join/room', JoinRoomController.joinRoom)


// const { createRoom, getRoomMessages } = require('../../controllers/ChatController/ChatRoomController');

// router.post('/rooms', createRoom);
// router.get('/rooms/:roomId/messages', getRoomMessages);




module.exports = router
