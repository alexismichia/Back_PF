const bcrypt = require('bcrypt');
const { User } = require('../../../src/db.js');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

let userService = {};

userService.createUser = async (email, password, username, favorite_players, favorite_teams) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    const existingUsername = await User.findOne({ where: { username } });

    if (existingUser) {
      throw new Error('Ya existe un usuario con este correo electrónico');
    }

    if (existingUsername) {
      throw new Error('Ya existe un usuario con este nombre de usuario');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
      favorite_players: favorite_players || [], 
      favorite_teams: favorite_teams || [] 
    });

    return newUser;

  } catch (error) {
    console.error(`Error creating user: ${error}`);
    throw error;
  }
}

userService.updateUser = async (id, email, password, username, favorite_players, favorite_teams) => {
  try {
    const user = await User.findOne({ where: { id } });

    if (!user) {
      throw new Error('No se encuentra el usuario');
    }
    if (email) {
      const existingEmailUser = await User.findOne({ where: { email } });
      if (existingEmailUser && existingEmailUser.id !== id) {
        throw new Error('Ya existe un usuario con este correo electrónico');
      }
      user.email = email;
    }
    if (username) {
      const existingUsernameUser = await User.findOne({ where: { username } });
      if (existingUsernameUser && existingUsernameUser.id !== id) {
        throw new Error('Ya existe un usuario con este nombre de usuario');
      }
      user.username = username;
    }
    if (password) {
      user.password = await bcrypt.hash(password, saltRounds);
    }
    if (favorite_players) {
      user.favorite_players = favorite_players;
    }
    if (favorite_teams) {
      user.favorite_teams = favorite_teams;
    }

    await user.save();

    return user;

  } catch (error) {
    console.error(`Error updating user: ${error}`);
    throw error;
  }
}


userService.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    throw new Error('Contraseña incorrecta');
  }
  console.log(process.env.JWT_SECRET)
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { user, token };
};




module.exports = userService;
