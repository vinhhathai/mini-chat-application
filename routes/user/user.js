'use strict';
//----------------------------------------------------------------
var express = require('express');
var router = express.Router();
const SearchUserController = require('../../controllers/SearchUserController/SearchUserController')
const RemoveFriendController = require('../../controllers/ManageFriendController/RemoveFriendController')
const AddFriendController = require('../../controllers/ManageFriendController/AddFriendController')
const GetListOfFriendController = require('../../controllers/ManageFriendController/GetListOfFriendController')
const ProfileController = require('../../controllers/Profile/ProfileController')
/* GET LIST OF FRIENDS */
router.get('/friends', GetListOfFriendController.getFriends);

/* DELETE UNFRIEND */
router.delete('/remove-friend', RemoveFriendController.removeFriend);

/* POST ADD FRIEND */
router.post('/add-friend', AddFriendController.addFriend);

/* GET SEARCHING USER */
router.get('/search-people', SearchUserController.searchUser);

//update profile
router.put('/update-profile', ProfileController.updateProfile);



module.exports = router;

