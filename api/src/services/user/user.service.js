const bcrypt = require("bcrypt");
const { User, Cart } = require("../../../src/db.js");
const { emailNewUser } = require("../../notifications/service/emailNewUser.js");
const { emailPayment } = require("../../notifications/service/emailPayment.js");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const clientId =
  "824712636886-5dlecueq2b9iq35rv1ok86i4jvcobm7l.apps.googleusercontent.com";
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
    const newCart = await Cart.create({ userId: newUser.id });

    emailNewUser(email, username);

    return newUser;
  } catch (error) {
    console.error(`Error creating user: ${error}`);
    throw error;
  }
};

userService.loginWithGoogle = async (tokenId) => {
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: clientId,
  });

  const payload = ticket.getPayload();

  if (!payload.email_verified) {
    throw new Error("Usuario no autenticado");
  }

  let user = await User.findOne({ where: { email: payload.email } });

  if (!user) {
    user = await User.create({
      username: payload.email,
      email: payload.email,
      password: payload.sub,
    });

    const newCart = await Cart.create({ userId: user.id});
    emailNewUser(user.email, user.username)
  }

  return user;
};

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
      .then((data) => {
        userUpdated = data;
        if (body.isPremium === true) {
          emailPayment(user.email);
        }
      })
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

userService.putRole = async (id, body) => {
  let updatedRoleUser;
  const isValidUser = await User.findByPk(id);

  if (!isValidUser) {
    throw new Error("Usuario no encontrado");
  }

  if (isValidUser) {
    await User.update(body, { where: { id: id } })
      .then((data) => (updatedRoleUser = data))
      .catch((err) => console.log(err));
  }
  return updatedRoleUser;
};

const { Op, Sequelize } = require("sequelize");

userService.getUser = async (username) => {
  try {
    const users = await User.findAll({
      where: Sequelize.where(Sequelize.fn("lower", Sequelize.col("username")), {
        [Op.like]: Sequelize.fn("lower", `${username}%`),
      }),
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

userService.deleteUser = async (id) => {
  let delUser;

  if (id) {
    await User.destroy({ where: { id: id } })
      .then((data) => (delUser = data))
      .catch((err) => console.log(err));
  }
  return delUser;
};

module.exports = userService;
