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

    const { username, email, gender, birthday } = req.body;
    const userId = req.user._id;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        username,
        email,
        gender,
        birthday,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      status: true,
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error
    });
  }
}
