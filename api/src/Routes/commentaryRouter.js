const express = require("express");
const commentaryRouter = express.Router();

const {getCommentary} = require("../controllers/commentary/getCommentary")

commentaryRouter.get("/:id", getCommentary)

module.exports = commentaryRouter;
