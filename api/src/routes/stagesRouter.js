const express = require("express");
const { getStagesById } = require("../controllers/Stages/getStagesByid");


const stagesRouter = express.Router();


stagesRouter.get("/:id",getStagesById)



module.exports = stagesRouter;