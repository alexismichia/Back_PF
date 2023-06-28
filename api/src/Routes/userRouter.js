const express = require("express");
const userRouter = express.Router();
const { authenticateJWT, authorizeRole } = require("../middlewares/auth");

const { updateUser } = require("../controllers/user/putUser");
const { loginUser } = require("../controllers/user/loginUser");
const { createUser } = require("../controllers/user/postUser");
const { putRole } = require("../controllers/user/putRole");
const { getUserId } = require("../controllers/user/getUserById");
const {putUserImage} = require("../controllers/user/putUserImage")

userRouter.post("/", createUser);
//userRouter.put("/role/:id", authenticateJWT, authorizeRole("admin"), putRole);
userRouter.put("/:id", authenticateJWT, updateUser);
userRouter.post("/login", loginUser);
userRouter.put("/image/:id",  putUserImage)
userRouter.get("/:id", getUserId);

module.exports = userRouter;
