const cloudinary = require("cloudinary").v2;

const CLOUD_SECRET = "fwDAE_UrNhzlqgIQfeFI5cRq1oI";
const CLOUD_KEY = "382194735316539";
const CLOUD_NAME = "dovpwlvqt";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_KEY,
  api_secret: CLOUD_SECRET,
});

module.exports = cloudinary;
