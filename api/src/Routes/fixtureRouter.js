const express = require("express");
const fixtureRouter = express.Router();

const { getFixtureById } = require("../controllers/fixture/getFixtureById");
const { getFixtureByName } = require("../controllers/fixture/getFixtureByName");

fixtureRouter.get("/search/:name", getFixtureByName);
fixtureRouter.get("/:id", getFixtureById);

module.exports = fixtureRouter;
