const bcrypt = require("bcrypt");
const { User } = require("../../../src/db.js");
const { emailNewUser } = require("../../notifications/service/emailNewUser.js");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');

const clientId = "824712636886-5dlecueq2b9iq35rv1ok86i4jvcobm7l.apps.googleusercontent.com";
const client = new OAuth2Client(clientId); // Asegúrate de instanciar el cliente OAuth2

let userService = {};

userService.createUser = async (
  email,
  password,
  username,
  favorite_players,
  favorite_teams,
  isPremium
) => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    const existingUsername = await User.findOne({ where: { username } });

    if (existingUser) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    }

    if (existingUsername) {
      throw new Error("Ya existe un usuario con este nombre de usuario");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
      favorite_players: favorite_players || [],
      favorite_teams: favorite_teams || [],
    });

    emailNewUser(email, username);
    
    return newUser;
  } catch (error) {
    console.error(`Error creating user: ${error}`);
    throw error;
  }
};

userService.loginWithGoogle = async (token) => {
  // Verificar el token de identidad con Google
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId,
  });
  
  const payload = ticket.getPayload();

  if (!payload.email_verified) {
    throw new Error("Usuario no autenticado");
  }

  // Comprobar si el usuario ya existe en la base de datos
  let user = await User.findOne({ where: { email: payload.email } });
  
  // Si el usuario no existe, crear un nuevo usuario con la información del token
  if (!user) {
    user = await User.create({
      username: payload.email,
      email: payload.email,
      password: payload.sub, // Este campo es opcional, ya que no necesitas una contraseña con Google Sign-In
    });
  }

  return user;
}

userService.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.error(`Error getting user by email: ${error}`);
    throw error;
  }
};

userService.updateUser = async (id, body) => {
  let userUpdated;
  const user = await User.findByPk(id);
  if (!user) return;
  if (user) {
    await User.update(body, { where: { id: id } })
      .then((data) => (userUpdated = data))
      .catch((err) => console.log(err));
  }

  return userUpdated;
};

userService.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Contraseña incorrecta");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { user, token };
};

userService.putRole = async (userId, newRole, requestingUserRole) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    if (requestingUserRole !== "admin") {
      throw new Error("No tienes permisos para modificar el rol de usuario");
    }

    console.log("Nuevo rol:", newRole);
    user.role = newRole;
    await user.save();

    return user;
  } catch (error) {
    console.log("Error en putRole:", error);
    throw new Error("Error al modificar el rol del usuario");
  }
};

const { Op, Sequelize } = require("sequelize");

userService.getUser = async (username) => {
  try {
    const users = await User.findAll({
      where: Sequelize.where(
        Sequelize.fn('lower', Sequelize.col('username')),
        { [Op.like]: Sequelize.fn('lower', `${username}%`) }
      )
    });

    if (users.length === 0) {
      throw new Error("No se encuentra ningún usuario");
    }
    return users;
  } catch (error) {
    console.error(`Error getting users: ${error}`);
    throw error;
  }
};

userService.getUserById = async (id) => {
  try {
    console.log("id", id);
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("No se encuentra ningún usuario con ese id");
    }
    return user;
  } catch (error) {
    console.error(`Error getting user: ${error}`);
    throw error;
  }
};

userService.deleteUser = async (requestingUserId, targetUsername) => {
  try {
    const requestingUser = await User.findOne({ where: { id: requestingUserId } });
    if (!requestingUser || requestingUser.role !== 'admin') {
      throw new Error("El usuario debe ser administrador para eliminar a otros usuarios");
    }

    const targetUser = await User.findOne({ where: { username: targetUsername } });
    if (!targetUser) {
      throw new Error("No se encuentra ningún usuario con ese username");
    }
    
    if (requestingUser.id === targetUser.id) {
      throw new Error("No puedes eliminarte a ti mismo");
    }

    await User.destroy({ where: { username: targetUsername } });

    return targetUser;

  } catch (error) {
    console.error(`Error deleting user: ${error}`);
    throw error;
  }
};





module.exports = userService;