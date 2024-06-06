const express = require("express");

const router = express.Router();
const upload = require("../middleware/avatar");

const {
    uploadAvatar,
} = require("../controllers/avatarController");

const { isAuthenticated } = require("../middleware/auth"); //desestructuro para no llamarla como parte de auth


// router.route('/product/new').post(newProduct);
router.post("/avatar/upload",upload.single('image'), uploadAvatar);
module.exports = router;
