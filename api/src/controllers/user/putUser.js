const userService = require('../../services/user/user.service');

const updateUser = async (req, res) => {
  const { id } = req.params;
  const body= req.body;
  console.log(id)
  console.log(body)
  try {
    const user = await userService.updateUser(id, body);
    if (user) {
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
