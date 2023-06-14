const { Router } = require("express");

const cupRouter = require("./cupRouter");
const teamRouter = require("./teamRouter");
const leagueRouter = require("./leagueRouter");
const nationalTeamRouter = require("./nationalTeamRouter");
const userRouter = require("./userRouter");
const playerRouter = require("./playerRouter");
const venuesRouter = require("./venuesRouter");
const schedulesRouter = require("./schedulesRouter");

const router = Router();

router.use("/cup", cupRouter);
router.use("/team", teamRouter);
router.use("/league", leagueRouter);
router.use("/nationalTeam", nationalTeamRouter);
router.use("/users", userRouter);
router.use("/players", playerRouter);
router.use("/venues", venuesRouter)
router.use("/schedules", schedulesRouter)

module.exports = router;
