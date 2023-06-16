const express = require("express");
const userRouter = express.Router();
const { createUser } = require("../controllers/user/postUser");


userRouter.post("/", createUser);

module.exports = userRouter;
