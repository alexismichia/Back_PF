const bcrypt = require("bcrypt");
const { User } = require("../../../src/db.js");
const { emailNewUser } = require("../../notifications/service/emailNewUser.js");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { emailUpdateUser,
} = require("../../notifications/service/emailupdateUser.js");

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
    //
    return newUser;
  } catch (error) {
    console.error(`Error creating user: ${error}`);
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
  emailUpdateUser(user.email)
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
  console.log(process.env.JWT_SECRET);
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

userService.getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error("No se encuentra el usuario");
    }
    return user;
  } catch (error) {
    console.error(`Error getting user: ${error}`);
    throw error;
  }
};

module.exports = userService;
