require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_NAME, CLOUDINARY_APIKEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_SECRET,
  secure: true,
});

const uploadToCloudinary = (path, folder) => {
  return cloudinary.uploader
    .upload(path, { folder })
    .then((data) => {
      return { url: data.url, public_id: data.public_id };
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeFromCloudinary = async (public_id) => {
  await cloudinary.uploader.destroy(public_id, function (err, res) {
    console.log(res, err);
  });
};

module.exports = { uploadToCloudinary, removeFromCloudinary };
// console.log(parser.single)
// console.log(cloudinary.config())
