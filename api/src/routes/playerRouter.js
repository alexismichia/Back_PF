const express = require("express")
const { getPlayerById } = require("../controllers/player/getPlayersByID");
const { getPlayersByName } = require("../controllers/player/getPlayersByName");

const playerRouter = express.Router();

playerRouter.get("/search/:name", getPlayersByName);
playerRouter.get("/:id",getPlayerById)



module.exports = playerRouter;

