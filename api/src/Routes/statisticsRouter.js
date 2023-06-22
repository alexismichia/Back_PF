const express = require("express");
const statisticsRouter = express.Router();

const {getSeasonStatisticsByParticipant} = require("../controllers/statistics/getSeasonStatisticsByParticipant")
const {getStageStatisticsById} = require("../controllers/statistics/getStageStatisticsById")
//participants = coaches, players, teams or referees
statisticsRouter.get("stages/:id", getStageStatisticsById)
statisticsRouter.get("/:participant/:id", getSeasonStatisticsByParticipant)

module.exports = statisticsRouter;