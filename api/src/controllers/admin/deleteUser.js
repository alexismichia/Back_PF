const userService = require("../../services/user/user.service");

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userService.deleteUser(id);

    if (user) {
      res.status(200).json({ message: "Usuario borrado" });
    } else {
      res.status(404).json({ message: "No se encontró el usuario" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};
