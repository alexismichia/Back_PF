const express = require("express");
const { getschedulesBySeasonId } = require("../controllers/schedules/getSchedulesBySeasonId");
const { getschedulesByTeamId } = require("../controllers/schedules/getSchedulesByTeamId");


const schedulesRouter = express.Router();


schedulesRouter.get("/seasons/:id",getschedulesBySeasonId)

schedulesRouter.get("/teams/:id",getschedulesByTeamId)



module.exports = schedulesRouter;