"use strict";
//----------------------------------------------------------------
var express = require("express");
var router = express.Router();
const CreateChatRoomController = require("../../controllers/CreateChatRoomController/CreateChatRoomController");
const GetListChatRoomController = require("../../controllers/GetListChatRoomController/GetListChatRoomController");
const JoinRoomController = require("../../controllers/JoinRoomController/JoinRoomController");
// var ChatRoomController = require('../../controllers/ChatController/ChatRoomController')
const LeaveChatRoomController = require("../../controllers/LeaveChatRoomController/LeaveChatRoomController");
const SearchRoomController = require("../../controllers/SearchRoomController/SearchRoomController");
const DeleteChatRoomController = require("../../controllers/DeleteChatRoomController/DeleteChatRoomController");
const UpdateChatRoomController = require("../../controllers/UpdateChatRoomController/UpdateChatRoomController");

//middleware
const {
  uploadRoomImage,
  handleMulterError,
} = require("../../middlewares/uploadFile");

// Route để cập nhật avatar phòng
router.put(
  "/room/avatar/:id",
  uploadRoomImage.single("image"),
  handleMulterError,
  UpdateChatRoomController.updateRoomAvatar
);

// Route để cập nhật tên phòng
router.put("/room/name/:id", UpdateChatRoomController.updateRoomName);

// DELETE chat room
router.delete("/delete-room/:id", DeleteChatRoomController.deleteChatRoom);

// POST join chat room
router.post("/join-room/", JoinRoomController.joinRoom);

//POST Create chat room
router.post(
  "/create-room",
  uploadRoomImage.single("image"),
  handleMulterError,
  CreateChatRoomController.createNewChatRoom
);

// Delete leave chat room
router.delete("/room/leave/", LeaveChatRoomController.leaveRoom);

//GET room  by id
router.get("/room/detail/:id", GetListChatRoomController.getChatRoomById);
/* GET SEARCHING USER */
router.get("/search-room", SearchRoomController.searchRoom);

//GET Get list of chat rooms
router.get("/room", GetListChatRoomController.getRoomsByOwnerOrMember);

// /* POST Join Chat with one user */
// // router.get('/room/:id', ChatRoomController.chatMessageToRoom);

//get chat room

// //join chat room
// router.get('/join/room', JoinRoomController.joinRoom)

// const { createRoom, getRoomMessages } = require('../../controllers/ChatController/ChatRoomController');

// router.post('/rooms', createRoom);
// router.get('/rooms/:roomId/messages', getRoomMessages);

module.exports = router;
