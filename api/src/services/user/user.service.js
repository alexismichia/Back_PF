const bcrypt = require('bcrypt');
const { users } = require('../../models/users');

const saltRounds = 10;

let userService = {};

userService.createUser = async (email, password, username, role, favorite_players, favorite_teams) => {
  try {
    const existingUser = await users.findOne({ where: { email } });
    const existingUsername = await users.findOne({ where: { username } });

    if (existingUser) {
      throw new Error('Ya existe un usuario con este correo electrónico');
    }

    if (existingUsername) {
      throw new Error('Ya existe un usuario con este nombre de usuario');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await users.create({
      email,
      password: hashedPassword,
      username,
      role: role || 'user', 
      favorite_players: favorite_players || [], 
      favorite_teams: favorite_teams || [] 
    });

    return newUser;

  } catch (error) {
    console.error(`Error creating user: ${error}`);
    throw error;
  }
}

module.exports = userService;
