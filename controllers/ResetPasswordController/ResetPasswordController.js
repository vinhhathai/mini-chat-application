'use strict';
//----------------------------------------------------------------
const bcrypt = require('bcrypt')
const UserModel = require("../../models/UserModel");
const emailValidation = require("../../validation/emailValidation");
const restorePasswordValidation = require("../../validation/restorePasswordValidation");
const jwt = require('jsonwebtoken');
const changePasswordValidation = require("../../validation/changePasswordValidation");
const { errorMessage, errorCode } = require('../../common/enum/error');
require('dotenv').config()
const sendResetPasswordEmail = require('../../utils/sendResetPasswordEmail')
const { generateOtp } = require('../../utils/string')

// Send a reset password email
exports.resetPassword = async (req, res, next) => {
    try {
        const { error } = await emailValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                status: false,
                message: ""
            });
        }
        // Get email for sending
        const { email } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (user) {
            const otpGen = generateOtp();
            console.log("Generated OTP:", otpGen);
            const generateOtpResult = await UserModel.updateOne(
                { email: email },
                { resetOtp: otpGen }
            );

            try {
                sendResetPasswordEmail('Facetok', email, otpGen)
                return res.status(201).json({
                    status: true,
                    message: `Reset password link has been sent to ${email}`
                })
            } catch (error) {
                return res.status(401).json({
                    status: false,
                    message: "cant send reset password",
                    error
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Error server",
            error
        });
    }
}


exports.restorePassword = async (req, res, next) => {
    try {
        const { error } = await restorePasswordValidation.validate(req.body)
        if (error) {
            return res.status(400).json({
                status: false,
                message: "Invalid input data",
                error: error.details[0].message
            });
        }
        const { email, password, otp } = req.body;
        const user = await UserModel.findOne({ email: email, resetOtp: otp });
        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
            user.resetOtp = null;

            await user.save();
            return res.status(200).json({
                status: true,
                message: "Password updated successfully"
            });

        } else {
            return res.status(400).json({
                status: false,
                message: "Not found email or OTP"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: "Error server",
            error
        });
    }
}


// Handle changing password request from client
exports.changePassword = async (req, res) => {
    const { newPassword } = req.body
    const { confirmNewPassword } = req.body
    const { resetPasswordToken } = req.body
    const { email } = req.body
    // check validation
    try {
        const { error } = await changePasswordValidation.validate({ newPassword, confirmNewPassword })
        if (error) {
            return res.status(400).json({
                timestamp: new Date().toISOString(),
                path: "/auth/change-password",
                code: errorCode.VALIDATION_FAILED,
                error: {
                    name: error.message,
                }
            });
        }
        // Verify token
        let token;
        try {
            token = jwt.verify(resetPasswordToken, process.env.SECRET_KEY);
        } catch (error) {
            return res.status(403).json({
                timestamp: new Date().toISOString(),
                path: "/auth/change-password",
                code: errorCode.UNAUTHORIZED,
                error: {
                    name: errorMessage.EXPIRED_TOKEN,
                }
            });
        }
        // check user and change password
        const user = await UserModel.findOne({ email: email })
        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            await UserModel.findOneAndUpdate({ email: email }, { password: hashedPassword })
            return res.status(200).json({
                message: "Change password successfully"
            })
        }
        return res.status(404).json({
            timestamp: new Date().toISOString(),
            path: "/auth/change-password",
            code: errorCode.DATA_NOT_FOUND,
            error: {
                name: errorMessage.EMAIL_NOT_FOUND,
            }
        });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/auth/change-password",
            code: errorCode.ERR_CHANGE_PASSWORD_FAILED,
            error: {
                name: error.message,
            }
        });
    }

}