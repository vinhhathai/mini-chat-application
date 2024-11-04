'use strict';
//----------------------------------------------------------------
var express = require('express');
var router = express.Router();
const CreateChatRoomController = require('../../controllers/CreateChatRoomController/CreateChatRoomController');
const GetListChatRoomController = require('../../controllers/GetListChatRoomController/GetListChatRoomController');
const JoinRoomController = require('../../controllers/JoinRoomController/JoinRoomController');
// var ChatRoomController = require('../../controllers/ChatController/ChatRoomController')
const LeaveChatRoomController = require('../../controllers/LeaveChatRoomController/LeaveChatRoomController');


//middleware
const { upload, handleMulterError } = require('../../middlewares/uploadFile');



// POST join chat room
router.delete('/delete-room/', JoinRoomController.joinRoom)

// POST join chat room
router.post('/join-room/', JoinRoomController.joinRoom)

//POST Create chat room
router.post('/create-room',upload.single('image'), handleMulterError,CreateChatRoomController.createNewChatRoom)


// Delete leave chat room
router.delete('/room/leave/', LeaveChatRoomController.leaveRoom)

//GET room  by id
router.get('/room/detail/:id', GetListChatRoomController.getChatRoomById)

//GET Get list of chat rooms
router.get('/room', GetListChatRoomController.getRoomsByOwnerOrMember)






// /* POST Join Chat with one user */
// // router.get('/room/:id', ChatRoomController.chatMessageToRoom);



//get chat room

// //join chat room
// router.get('/join/room', JoinRoomController.joinRoom)


// const { createRoom, getRoomMessages } = require('../../controllers/ChatController/ChatRoomController');

// router.post('/rooms', createRoom);
// router.get('/rooms/:roomId/messages', getRoomMessages);




module.exports = router
