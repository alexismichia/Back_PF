const express = require("express");
const standingsRouter = express.Router();

<<<<<<< HEAD

const { getStandingsBySeason } = require("../controllers/standings/getStandingsBySeason");


=======
//const { getStandings } = require("../controllers/standings/getStandings");
const { getStandingsBySeason } = require("../controllers/standings/getStandingsBySeason");

//standingsRouter.get("/", getStandings);
>>>>>>> controllers
standingsRouter.get("/:id", getStandingsBySeason);

module.exports = standingsRouter;