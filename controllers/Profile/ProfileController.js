'use strict';
//----------------------------------------------------------------
const profileValidation = require("../../validation/profileValidation")
const UserModel = require("../../models/UserModel")

exports.updateProfile = async (req, res) => {
  try {
    // Validate request body
    const { error } = await profileValidation.validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({
        status: false,
        message: "Invalid input data",
        error: error.details[0].message,
      });
    }

    const { email, fullname } = req.body;
    const updatedUser = await UserModel.findOne({
      email: email,
    },)

    if (updatedUser) {
      if (fullname) {
        updatedUser.fullName = fullname;
      }
      updatedUser.save();
      return res.status(200).json({
        status: false,
        message: "Update successful"
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error
    });
  }
}


exports.updateProfilePicture = async (req, res) => {
  try {
    const avatarPath = req.file ? `/upload/profile/${req.file.filename}` : '/upload/profile/profileDefault.jpg'; 
    const { user_id } = req.user;
    const updatedUser = await UserModel.findOne({ _id: user_id });
    console.log(avatarPath)
    console.log(user_id)
    console.log(updatedUser)


    if (updatedUser) {
      if (avatarPath) {
        updatedUser.profilePicture = avatarPath;
      }
      await updatedUser.save();
      return res.status(200).json({
        status: true,
        message: "Profile picture updated successfully",
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error updating profile picture:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
};