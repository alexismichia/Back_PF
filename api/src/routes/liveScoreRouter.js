const express = require("express");
const liveScoreRouter = express.Router();

const { getLiveScore } = require("../controllers/livescores/getLiveScore");
const {getLiveScoreByState} = require("../controllers/livescores/getLiveScoreByState")
const {getLiveScoreLatest} = require("../controllers/livescores/getLiveScoreLatest")

liveScoreRouter.get("/", getLiveScore);
liveScoreRouter.get("/state/:id", getLiveScoreByState)
liveScoreRouter.get("/latest", getLiveScoreLatest)

module.exports = liveScoreRouter;
