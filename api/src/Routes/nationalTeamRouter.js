const express = require("express");
const { getNationalTeam } = require("../controllers/nationalTeam/getNationalTeam");

const playerRouter = express.Router();

playerRouter.get("/", getNationalTeam);

module.exports = playerRouter;