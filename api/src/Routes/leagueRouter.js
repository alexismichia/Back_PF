const express = require("express");
const leagueRouter = express.Router();
const { getLeague } = require("../controllers/league/getLeague");


leagueRouter.get("/:id", getLeague);

module.exports = leagueRouter;
