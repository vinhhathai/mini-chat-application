'use strict';
const { errorCode, errorMessage } = require('../../common/enum/error');
const RoomModel = require('../../models/RoomModel');

//---------------------------------------------------------------------------
exports.searchRoom = async (req, res) => {
    const query = req.query.query;

    // Check query parameters
    if (!query || typeof query !== 'string' || query.trim() === '') {
        return res.status(400).json({
            timestamp: new Date().toISOString(),
            path: "/room/search-room",
            code: errorCode.VALIDATION_FAILED,
            error: {
                name: errorMessage.ERR_INVALID_QUERY
            }
        });
    }

    try {
        // Escape query to prevent regex errors
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Find room by query string, search by room name
        const rooms = await RoomModel.find({
            name: { $regex: escapedQuery, $options: 'i' } // Find by room name (case-insensitive)
        }, '_id name image'); // Chỉ lấy các trường _id, name, và image

        // Return array of rooms
        res.status(200).json({ data: rooms });
    } catch (error) {
        return res.status(500).json({
            timestamp: new Date().toISOString(),
            path: "/room/search-room",
            code: errorCode.ERR_GET_DATA_FAILED,
            error: {
                name: error.message,
            }
        });
    }
};
