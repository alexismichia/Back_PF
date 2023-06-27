const express = require("express");
const { getcoachsid, getcoachs } = require("../controllers/coachs/coachs");
const CoachesRouter = express.Router();



//id is fixture id
CoachesRouter.get("/:id", getcoachsid)
CoachesRouter.get("", getcoachs)

module.exports = CoachesRouter;