const express = require("express");
const leagueRouter = express.Router();

const { getLeagueById } = require("../controllers/league/getLeagueById");
const { getLeagueByName } = require("../controllers/league/getLeagueByName");
const {getLeagueByCountry} = require("../controllers/league/getLeagueByCountry")
const {getLeagueByTeam} = require("../controllers/league/getLeagueByTeam")

leagueRouter.get("/search/:name", getLeagueByName);
leagueRouter.get("/countries/:id", getLeagueByCountry)
leagueRouter.get("/team/:id", getLeagueByTeam)
leagueRouter.get("/:id", getLeagueById);

module.exports = leagueRouter;
