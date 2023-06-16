const userService = require('../../services/User/User.service');

exports.createUser = async (req, res) => {
const { email, password, username, role, favorite_players, favorite_teams } = req.body;
  try {
    const User = await userService.createUser(email, password, username, role, favorite_players, favorite_teams); 
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
