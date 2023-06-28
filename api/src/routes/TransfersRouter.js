const express = require("express");
const { getlastesttransfers, gettransfers, gettransfersid } = require("../controllers/transfers/transfers");
const TransfersRouter = express.Router();



//id is fixture id
TransfersRouter.get("/:id", gettransfersid)
TransfersRouter.get("", gettransfers)
TransfersRouter.get("/latest", getlastesttransfers)

module.exports = TransfersRouter;