const userService = require('../../services/user/user.service');

const createUser = async (req, res) => {
  const { email, password, username, favorite_players, favorite_teams } = req.body;

  try {
    const User = await userService.createUser(email, password, username, favorite_players, favorite_teams); 
    if (User) {
      res.status(200).json(User);
    } else {
      res.status(404).json({ message: 'No User found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginWithGoogle = async (req, res) => {
  console.log("Función loginWithGoogle llamada");

  const { tokenId } = req.body;

  try {
    const response = await userService.loginWithGoogle(tokenId);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = { createUser, loginWithGoogle };
