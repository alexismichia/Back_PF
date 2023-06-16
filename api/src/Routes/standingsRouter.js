const express = require("express");
const standingsRouter = express.Router();
//const { getStandings } = require("../controllers/standings/getStandings");
const { getStandingsBySeason } = require("../controllers/standings/getStandingsBySeason");

//standingsRouter.get("/", getStandings);

standingsRouter.get("/:id", getStandingsBySeason);

module.exports = standingsRouter;