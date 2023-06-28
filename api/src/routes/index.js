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
const nationalTeamByNameRouter = require("./nationalTeamRouter")
const standingsRouter = require("./standingsRouter")
const standingsBySeasonRouter = require("./standingsRouter")
const updateUser = require ("./userRouter")
const loginUser = require ("./userRouter")
const liveScoreRouter = require("./liveScoreRouter");
const CoachesRouter = require("./CoachesRouter");
const TransfersRouter = require("./TransfersRouter");
const TypesRouter = require("./TypesRouter");
const statisticsRouter = require("./statisticsRouter")
const putRoleRouter = require("./userRouter")
const subscriptionRouter = require("./paymentsRouter");
const StateRouter = require("./stategamesRouter");
const newsRouter = require("./newsRouter");
const stagesRouter = require("./stagesRouter");

const router = Router();

router.use("/cup", cupRouter);
router.use("/team", teamRouter);
router.use("/league", leagueRouter);
router.use("/nationalTeam", nationalTeamRouter);
router.use("/nationalTeam", nationalTeamByNameRouter);
router.use("/players", playerRouter);
router.use("/venues", venuesRouter)
router.use("/commentary", commentaryRouter)
router.use("/schedules", schedulesRouter)
router.use("/fixture", fixtureRouter)
router.use("/standings", standingsRouter)
router.use("/standings", standingsBySeasonRouter)
router.use("/users", userRouter)
router.use("/users", updateUser)
router.use("/users", loginUser)
router.use("/livescore", liveScoreRouter)
router.use("/coaches", CoachesRouter)
router.use("/transfers", TransfersRouter)
router.use("/types", TypesRouter)
router.use("/statistics", statisticsRouter)
router.use("/users", putRoleRouter)
router.use("/subscription", subscriptionRouter)
router.use("/States", StateRouter)
router.use("/News",newsRouter)
router.use("/Stages",stagesRouter)

module.exports = router;

