require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_NAME, CLOUDINARY_APIKEY, CLOUDINARY_SECRET } = process.env;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "User-Images",
    allowedFormats: ["jpg", "png"],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
