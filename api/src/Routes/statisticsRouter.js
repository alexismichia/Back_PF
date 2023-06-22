const express = require("express");
const statisticsRouter = express.Router();

const {getSeasonStatisticsByParticipant} = require("../controllers/statistics/getSeasonStatisticsByParticipant")
statisticsRouter.get("/:participant/:id", getSeasonStatisticsByParticipant)

module.exports = statisticsRouter;