const express = require("express");
const { getStateGameById } = require("../controllers/StateGame/StateGame");


const StateRouter = express.Router();


StateRouter.get("/:id",getStateGameById)



module.exports = StateRouter;