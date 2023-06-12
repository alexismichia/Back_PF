const express = require("express");
const { getLeagues } = require("../controllers/league/getLeague");

const leagueRouter = express.Router();

leagueRouter.get("", getLeagues);

module.exports = leagueRouter;
