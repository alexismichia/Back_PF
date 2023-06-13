const express = require("express");
c
const { getPlayerById } = require("../controllers/player/getPlayersByID");
const { getPlayersByName } = require("../controllers/player/getPlayersByName");

const playerRouter = express.Router();

playerRouter.get("/search/:name", getPlayersByName);
playerRouter.get("/players/:ID",getPlayerById)



module.exports = playerRouter;

