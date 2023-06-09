const { Router } = require("express");

const cupRouter = require("./cupRouter");
const teamRouter = require("./teamRouter");
const ligueRouter = require("./ligueRouter");
const nationalTeamRouter = require("./nationalTeamRouter");
const userRouter = require("./userRouter")

const router = Router();

router.use("/cup", cupRouter);
router.use("/team", teamRouter);
router.use("/ligue", ligueRouter);
router.use("/nationalTeam", nationalTeamRouter);
router.use("/users", userRouter)

module.exports = router;
