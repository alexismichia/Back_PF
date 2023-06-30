const express = require("express");
const userRouter = express.Router();
const { authenticateJWT, authorizeRole } = require("../middlewares/auth");

const { updateUser } = require("../controllers/user/putUser");
const { loginUser } = require("../controllers/user/loginUser");
const { createUser, loginWithGoogle } = require("../controllers/user/postUser");
const { putRole } = require("../controllers/user/putRole");
const { getUsers } = require("../controllers/user/getUser");
const {putUserImage} = require("../controllers/user/putUserImage")

userRouter.post("/", createUser);
userRouter.get("/:username", getUsers);
userRouter.put("/:id", updateUser);
userRouter.post("/login", loginUser);
userRouter.post("/login/google", loginWithGoogle);
userRouter.put("/image/:id",  putUserImage)

module.exports = userRouter;
