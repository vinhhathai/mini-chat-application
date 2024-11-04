"use strict";
//----------------------------------------------------------------
var express = require("express");
var router = express.Router();
const SearchUserController = require("../../controllers/SearchUserController/SearchUserController");
const RemoveFriendController = require("../../controllers/ManageFriendController/RemoveFriendController");
const AddFriendController = require("../../controllers/ManageFriendController/AddFriendController");
const GetListOfFriendController = require("../../controllers/ManageFriendController/GetListOfFriendController");
const ProfileController = require("../../controllers/Profile/ProfileController");
const AcceptFriendrequestController = require("../../controllers/ManageFriendController/AcceptFriendRequestController");
const DeclineFriendRequestController = require("../../controllers/ManageFriendController/DeclineFriendRequestController");
const GetListRequesterController = require("../../controllers/ManageFriendController/GetListRequesterController");



//middleware
const {
  uploadProfilePicture,
  handleMulterError,
} = require("../../middlewares/uploadFile");


/* GET LIST REQUESTER FRIENDS */
router.get("/request-friend", GetListRequesterController.getFriendRequests);

/* ACCEPT FRIENDS */
router.post("/decline-friend", DeclineFriendRequestController.declineFriendRequest);

/* ACCEPT FRIENDS */
router.post("/accept-friend", AcceptFriendrequestController.acceptFriendRequest);

/* GET LIST OF FRIENDS */
router.get("/friends", GetListOfFriendController.getFriends);

/* DELETE UNFRIEND */
router.delete("/remove-friend", RemoveFriendController.removeFriend);

/* POST ADD FRIEND */
router.post("/add-friend", AddFriendController.addFriend);

/* GET SEARCHING USER */
router.get("/search-people", SearchUserController.searchUser);

//update profile
router.put("/update-profile", ProfileController.updateProfile);

//update profilePicture
router.put(
  "/profile-picture",
  uploadProfilePicture.single("image"),
  handleMulterError,
  ProfileController.updateProfilePicture
);

module.exports = router;
