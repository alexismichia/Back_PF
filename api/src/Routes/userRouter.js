const express = require("express");
const userRouter = express.Router();

//const { getUsers } = require("../controllers/user/getUser");
const { createUser } = require("../controllers/user/postUser");



//userRouter.get("", getUsers);
userRouter.post("/", createUser);

module.exports = userRouter;