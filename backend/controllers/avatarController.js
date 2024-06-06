const Avatar = require("../models/avatar");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");

exports.uploadAvatar = catchAsyncErrors(async (req, res, next) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({
            success: false,
            error: 'No file uploaded'
        });
    }

    const imagePath = req.file.path;

    let imageBuffer;
    try {
        imageBuffer = fs.readFileSync(imagePath);
    } catch (error) {
        return next(new ErrorHandler("Error al leer la imagen subida", 500));
    }

    const newAvatar = await Avatar.create({ image: imageBuffer });

    res.status(201).json({
        success: true,
        data: newAvatar,
    });
});