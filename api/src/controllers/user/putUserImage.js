// const { uploadToCloudinary, upload } = require("../../cloudinary-upload/config");
// const { User } = require("../../models/User");

const User = require("../../models/User");

// const putUserImage = async (req, res) => {
//   upload.single("userImage")(req, res, async (err) => {
//     if (err) {
//       return res.status(400).json({ error: "Failed to upload image" });
//     }

//     const { id } = req.params;
//     try {
//       const data = await uploadToCloudinary(req.file.buffer.toString("base64"), "User-Images");
//       const user = await User.findByPk(id);

//       if (!user) {
//         return res
//           .status(400)
//           .json({ message: "There are no Users with that id" });
//       } else {
//         await User.update(
//           { image: { publicId: data.public_id, imageUrl: data.url } },
//           { where: { id: id } }
//         );
//       }

//       res.status(200).json({ message: "User Image uploaded successfully" });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });
// };


const putUserImage = async (req, res) =>{
    // console.log(req.file.path);
    console.log(req)
    const {id} = req.params
try {
    const user = await User.findByPk(id)
    if(!user)return res.status(400).json({ message: "There are no Users with that id" });

    else {  await User.update(
                  { image: { publicId: req.file.public_id, imageUrl: req.file.url } },
                  { where: { id: id } }
                );
              }
        
              res.status(200).json({ message: "User Image uploaded successfully" });
} catch (error) {
    console.log(error)
    res.status(400).json({error: error})
}
}
module.exports = { putUserImage };

