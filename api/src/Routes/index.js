const { Router } = require("express");

const cupRouter = require("./cupRouter");
const leagueRouter = require("./leagueRouter");
const userRouter = require("./userRouter");
const playerRouter = require("./playerRouter");
const teamRouter = require("./teamRouter");
const nationalTeamRouter = require("./nationalTeamRouter");
const venuesRouter = require("./venuesRouter")
const commentaryRouter = require("./commentaryRouter");
const schedulesRouter = require("./schedulesRouter");
const fixtureRouter = require("./fixtureRouter")


const router = Router();

router.use("/cup", cupRouter);
router.use("/team", teamRouter);
router.use("/league", leagueRouter);
router.use("/nationalTeam", nationalTeamRouter);
router.use("/users", userRouter);
router.use("/players", playerRouter);
router.use("/venues", venuesRouter)
router.use("/commentary", commentaryRouter)
router.use("/schedules", schedulesRouter)
router.use("/fixture", fixtureRouter)


module.exports = router;

