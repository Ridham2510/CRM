const mongoose = require('mongoose');
const AVATAR_PATH = '/uploads/item';
const multer = require('multer');
const path = require('path');
const db = require('../config/mongoose');

const ItemSchema = mongoose.Schema({
    item_name: { type: String, required: true },
    item_price: { type: String, required: true },
    item_description: { type: String, required: true },
    item_img: { type: String, required: true },
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

ItemSchema.statics.uploadedAvatar = multer({ storage: storage }).single('item_img');
ItemSchema.statics.avatarPath = AVATAR_PATH;

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item