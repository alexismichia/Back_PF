const { getAllUsersAsync } = require("../../services/user/user.service");


module.exports.getUsers = async (req, res) => {
    try {
      const allUsers = await getAllUsersAsync();
      if (allUsers && allUsers.length > 0) {
        res.status(200).json(allUsers);
      } else {
        res.status(404).json({ message: "No se encontro el usuario" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };