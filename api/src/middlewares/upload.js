// const multer = require("multer")
// const storage = multer.diskStorage()
// const upload = multer({storage: storage})

// module.exports = upload
const multer = require("multer");
const { storage } = require("../cloudinary-upload/config");

const upload = multer({ storage });

module.exports = upload;
