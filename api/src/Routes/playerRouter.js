const express = require("express");
const { getPlayers } = require("../controllers/player/getPlayers");

const playerRouter = express.Router();

playerRouter.get("/", getPlayers);

module.exports = playerRouter;
