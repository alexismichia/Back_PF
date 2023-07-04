const userService = require("../../services/user/user.service");

module.exports.deleteUser = async (req, res) => {
    const targetUsername = req.params.username;
    const requestingUserId = req.user.id; 
  
    try {
      const user = await userService.deleteUser(requestingUserId, targetUsername);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "No se encontró el usuario" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  }
  