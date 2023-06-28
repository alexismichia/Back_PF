const express = require("express");
const standingsRouter = express.Router();
//const { getStandings } = require("../controllers/standings/getStandings");
const { getStandingsBySeason } = require("../controllers/standings/getStandingsBySeason");
const { getStandingRoundById } = require("../controllers/standings/getStandingsRoundByid");

//standingsRouter.get("/", getStandings);
standingsRouter.get("season/:id", getStandingsBySeason);
standingsRouter.get("rounds/:id", getStandingRoundById);

module.exports = standingsRouter;