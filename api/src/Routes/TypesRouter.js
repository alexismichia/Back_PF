const express = require("express");
const { gettypes } = require("../controllers/types/types");
const TypesRouter = express.Router();



//id is fixture id

TypesRouter.get("", gettypes)


module.exports = TypesRouter;