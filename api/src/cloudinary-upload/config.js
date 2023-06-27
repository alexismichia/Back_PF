require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const { CLOUDINARY_NAME, CLOUDINARY_APIKEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_SECRET,
  secure: true
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "User profile pics",
  allowedFormats: "png",
  // transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

  const parser = multer({ storage: storage });

console.log(parser.single)
console.log(cloudinary.config())