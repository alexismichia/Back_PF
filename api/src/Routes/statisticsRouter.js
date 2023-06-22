const express = require("express");
const statisticsRouter = express.Router();

const {getStatisticsByParticipant} = require("../controllers/statistics/getStatisticsByParticipant")
statisticsRouter.get("/:participant/:id", getStatisticsByParticipant)

module.exports = statisticsRouter;