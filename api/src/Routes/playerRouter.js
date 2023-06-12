const express = require("express");
const playerRouter = express.Router();
const { getPlayers } = require("../controllers/player/getPlayers");

playerRouter.get('/', getPlayers);

module.exports = playerRouter;
