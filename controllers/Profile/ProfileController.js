"use strict";
//----------------------------------------------------------------
const UserModel = require("../../models/UserModel");
const { profileValidation } = require('../../validation/profileValidation');
const bcrypt = require('bcrypt');

exports.updateProfile = async (req, res) => {
  try {
    const { fullName, oldPassword, newPassword, confirmPassword } = req.body;

    // Validate dữ liệu đầu vào
    const { error } = profileValidation.validate({ fullName, oldPassword, newPassword, confirmPassword });
    if (error) {
      return res.status(400).json({
        status: false,
        message: error.details[0].message
      });
    }

    // Tìm người dùng
    const { user_id } = req.user;
    const updatedUser = await UserModel.findById(user_id);
    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "Người dùng không tồn tại"
      });
    }

    // Cập nhật fullName nếu có
    if (fullName) {
      updatedUser.fullName = fullName;
    }

    // Kiểm tra và cập nhật mật khẩu nếu có
    if (oldPassword && newPassword && confirmPassword) {
      // So sánh mật khẩu cũ
      const isMatch = await bcrypt.compare(oldPassword, updatedUser.password);
      if (!isMatch) {
        return res.status(400).json({
          status: false,
          message: "Mật khẩu cũ không đúng"
        });
      }

      // Kiểm tra mật khẩu mới và xác nhận mật khẩu
      if (newPassword !== confirmPassword) {
        return res.status(400).json({
          status: false,
          message: "Mật khẩu mới và xác nhận mật khẩu không khớp"
        });
      }

      // Mã hóa mật khẩu mới
      const salt = await bcrypt.genSalt(10);
      updatedUser.password = await bcrypt.hash(newPassword, salt);
    }

    await updatedUser.save();
    return res.status(200).json({
      status: true,
      message: "Cập nhật thông tin thành công"
    });
  } catch (error) {
    console.error("Có lỗi xảy ra", error.message);
    return res.status(500).json({
      status: false,
      message: "Có lỗi xảy ra",
      error
    });
  }
};


exports.updateProfilePicture = async (req, res) => {
  try {
    // Kiểm tra file ảnh đã được upload hay không
    const avatarPath = req.file ? `/upload/profile/${req.file.filename}` : '/upload/profile/profileDefault.jpg';
    const { user_id } = req.user;

    // Tìm người dùng theo ID
    const updatedUser = await UserModel.findOne({ _id: user_id });
    console.log(avatarPath);
    console.log(user_id);
    console.log(updatedUser);

    // Kiểm tra nếu người dùng tồn tại
    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "Người dùng không tồn tại",
      });
    }

    // Cập nhật đường dẫn ảnh đại diện
    updatedUser.profilePicture = avatarPath;
    await updatedUser.save();

    return res.status(200).json({
      status: true,
      message: "Cập nhật ảnh đại diện thành công",
    });
  } catch (error) {
    console.error("Có lỗi xảy ra khi cập nhật ảnh đại diện:", error);
    return res.status(500).json({
      status: false,
      message: "Có lỗi nội bộ xảy ra",
      error,
    });
  }
};
