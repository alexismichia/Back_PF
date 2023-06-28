const express = require("express");
const commentaryRouter = express.Router();

const {getCommentary} = require("../controllers/commentary/getCommentary")

//id is fixture id
commentaryRouter.get("/:id", getCommentary)

module.exports = commentaryRouter;
