const express = require("express");
const {
  getNationalTeams,
} = require("../controllers/nationalTeam/getNationalTeam");

const nationalTeamRouter = express.Router();

nationalTeamRouter.get("", getNationalTeams);

module.exports = nationalTeamRouter;
