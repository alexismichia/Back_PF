const userService = require('../../services/user/user.service');

const updateUser = async (req, res) => {
  const { id } = req.user;
  const { email, password, username, favorite_players, favorite_teams } = req.body;

  try {
    const user = await userService.updateUser(id, email, password, username, favorite_players, favorite_teams);
    if (user) {
      delete user.dataValues.password;
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'No user found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { updateUser };