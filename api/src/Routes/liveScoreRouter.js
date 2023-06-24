const express = require("express");
const liveScoreRouter = express.Router();

const { getLiveScore } = require("../controllers/livescores/getLiveScore");
const {getLiveScoreByState} = require("../controllers/livescores/getLiveScoreByState")

liveScoreRouter.get("/", getLiveScore);
liveScoreRouter.get("/state/:id", getLiveScoreByState)

module.exports = liveScoreRouter;
