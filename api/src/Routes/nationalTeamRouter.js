const express = require("express");
const { getNationalTeam } = require("../controllers/nationalTeam/getNationalTeam");
const { getNationalTeambyName } = require("../controllers/nationalTeam/getNationalTeamByName");

const playerRouter = express.Router();

playerRouter.get("/", getNationalTeam);
playerRouter.get("/:name", getNationalTeambyName);

module.exports = playerRouter;