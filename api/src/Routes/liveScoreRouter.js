const express = require("express");
const liveScoreRouter = express.Router();

const { getLiveScore } = require("../controllers/livescores/getLiveScore");

liveScoreRouter.get("/", getLiveScore);

module.exports = liveScoreRouter;
