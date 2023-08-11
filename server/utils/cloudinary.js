const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const KEY = process.env.CLOUD_KEY;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
});

module.exports = cloudinary;