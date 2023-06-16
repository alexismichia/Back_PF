const userService = require('../../services/user/user.service');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await userService.loginUser(email, password);

    res.status(200).json({
      message: 'Login successful',
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
