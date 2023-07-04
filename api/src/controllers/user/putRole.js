const userService = require('../../services/user/user.service');

async function putRole(req, res) {
  try {
    const { userId, newRole: role } = req.body; 
    const requestingUserRole = req.user.role;
    const updatedUser = await userService.putRole(userId, role, requestingUserRole);
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Error al modificar el rol del usuario' });
  }
}

module.exports = {
  putRole,
};
