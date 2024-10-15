'use strict';
//----------------------------------------------------------------
require('dotenv').config()
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const { errorCode, errorMessage } = require('../common/enum/error');

const checkLogin = async (req, res, next) => {
    try {
        // Check login
        const accessToken = req.headers.authorization?.split(' ')[1]

        if (!accessToken) {
            return res.status(401).json({
                timestamp: new Date().toISOString(),
                path: req.originalUrl,
                code: errorCode.UNAUTHORIZED,
                error: {
                    name: errorMessage.LOGIN_REQUIRED
                }
            });
        }
        // verify 
        const token = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY)

        if (!token) {
            return res.status(401).json({
                timestamp: new Date().toISOString(),
                path: req.originalUrl,
                code: errorCode.UNAUTHORIZED,
                error: {
                    name: errorMessage.ERR_TOKEN_CAN_NOT_AUTHORIZE
                }
            });
        }

        // Add user_id to req.user
        req.user = {
            user_id: token._id
        };
        // Proceed to next middleware
        next();

    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: req.originalUrl,
            code: errorCode.CHECK_AUTHORIZATION_FAILED,
            error: {
                name: error.message
            }
        });


    }
}

module.exports = checkLogin;