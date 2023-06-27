const { uploadToCloudinary } = require("../../cloudinary-upload/config");
const upload = require("../../middlewares/upload");
const User = require("../../models/User");

const putUserImage = async (req, res) => {
  upload.single("userImage")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "Failed to upload image" });
    }

    const { id } = req.body;

    try {
      const data = await uploadToCloudinary(req.file.path, "User-Images");
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ message: "There are no Users with that id" });
      } else {
        await User.update(
          {
            image: {
              publicId: data.public_id,
              imageUrl: data.url,
            },
          },
          { where: { id: user.id } }
        );
      }

      res.status(200).json({ message: "User Image uploaded successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

module.exports = { putUserImage };
