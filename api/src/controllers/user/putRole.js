const userService = require('../../services/user/user.service');

async function putRole(req, res) {
    try {
      const { userId } = req.body; // Acceder a "userId" en lugar de "id"
      const { newRole } = req.body; // Acceder a "newRole" en lugar de "role"
  
      const requestingUserRole = req.user.role;
  
      const updatedUser = await userService.putRole(userId, newRole, requestingUserRole);
  
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: 'Error al modificar el rol del usuario' });
    }
  }
  
  
  module.exports = {
    putRole,
  };
  
