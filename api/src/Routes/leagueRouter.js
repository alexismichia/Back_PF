const express = require("express");
const leagueRouter = express.Router();
const { getLeagueById } = require("../controllers/league/getLeagueById");
const { getLeagueByName } = require("../controllers/league/getLeagueByName");

leagueRouter.get("/:id", getLeagueById);
leagueRouter.get("/search/:name", getLeagueByName);

module.exports = leagueRouter;
