const userService = require("../../services/user/user.service");

module.exports.getUsers = async (req, res) => { 
  const { username } = req.params;
  try {
    const user = await userService.getUser(username);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No se encontró el usuario" }); 
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};
