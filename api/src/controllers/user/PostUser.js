const userService = require('../../services/user/user.service');

exports.createUser = async (req, res) => {
const { email, password, username, role, favorite_players, favorite_users } = req.body;
  try {
    const user = await userService.createUser(email, password, username, role, favorite_players, favorite_teams); 
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'No user found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
