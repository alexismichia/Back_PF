const express = require("express");
const leagueRouter = express.Router();
const { getLeagueById } = require("../controllers/league/getLeagueById");


leagueRouter.get("/:id", getLeagueById);

module.exports = leagueRouter;
