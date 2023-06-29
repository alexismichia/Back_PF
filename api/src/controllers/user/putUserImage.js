const cloudinary = require("../../cloudinary-upload/config");
const { User } = require("../../db");

const putUserImage = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "userProfilePic",
      public_id: id,
      allowed_formats: ["jpg", "png", "jpeg"],
      overwrite: true,
    });
    console.log(result.public_id, result.url);
    const user = await User.findByPk(id);
    if (!user)
      res.status(400).json({ error: "There are no users with that id" });
    else {
      const foundUser = await User.update(
        { image: { publicId: result.public_id, imageUrl: result.secure_url } },
        { where: { id: id } }
      );
      res.status(200).json(foundUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

module.exports = { putUserImage };
