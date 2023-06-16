const express = require("express");
const { getNationalTeam } = require("../controllers/nationalTeam/getNationalTeam");
const { getNationalTeambyName } = require("../controllers/nationalTeam/getNationalTeamByName");

const nationalTeamRouter = express.Router();

nationalTeamRouter.get("/", getNationalTeam);
nationalTeamRouter.get("/:name", getNationalTeambyName);

module.exports = nationalTeamRouter;