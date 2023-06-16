const express = require("express");
const standingsRouter = express.Router();


const { getStandingsBySeason } = require("../controllers/standings/getStandingsBySeason");


standingsRouter.get("/:id", getStandingsBySeason);

module.exports = standingsRouter;