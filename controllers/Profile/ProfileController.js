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
