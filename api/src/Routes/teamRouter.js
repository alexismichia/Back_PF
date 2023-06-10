const express = require("express");
const { getTeams } = require("../controllers/team/getTeam");

const teamRouter = express.Router();

teamRouter.get("", getTeams);

module.exports = teamRouter;
