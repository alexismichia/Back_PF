const express = require("express");
const { getPlayers } = require("../controllers/user/getUser");

const playerRouter = express.Router();

playerRouter.get("", getPlayers);

module.exports = playerRouter;
