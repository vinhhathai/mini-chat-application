'use strict';
//----------------------------------------------------------------
const multer = require('multer');
const path = require('path');
const { errorCode, errorMessage } = require('../common/enum/error')

// Config storage path and file name for chat room images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/upload/roomImage'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Config storage for profile pictures
const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/upload/profile'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Filter to check file type
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Error: File type not supported'));
    }
};

// Create multer for chat room images
const uploadRoomImage = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 50 }, // Limit file size to 50MB
    fileFilter: fileFilter
});

// Create multer for profile pictures
const uploadProfilePicture = multer({
    storage: profileStorage,
    limits: { fileSize: 1024 * 1024 * 50 }, // Limit file size to 50MB
    fileFilter: fileFilter
});

function handleMulterError(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({
                timestamp: new Date().toISOString(),
                path: req.path,  // Cập nhật đường dẫn chính xác của request
                code: errorCode.FILE_EXCEEDED_SIZE,
                error: {
                    name: "File is exceeded (>=50MB)"
                }
            });
        }
    } else if (err) {
        // An unknown error occurred when uploading.
        return res.status(415).json({
            timestamp: new Date().toISOString(),
            path: req.path,
            code: errorCode.UPLOAD_FILE_FAILED,
            error: {
                name: err.message,
            }
        });
    }
    // Everything went fine.
    next();
}


// Export the upload functions and error handler
module.exports = {
    uploadRoomImage,
    uploadProfilePicture,
    handleMulterError
};
