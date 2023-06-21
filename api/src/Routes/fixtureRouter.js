const express = require("express");
const fixtureRouter = express.Router();

const { getFixtureById } = require("../controllers/fixture/getFixtureById");
const { getFixtureByName } = require("../controllers/fixture/getFixtureByName");
const { getTodaysFixtures } = require("../controllers/fixture/getTodaysFixtures")
const { getFixtureByDateRange } = require("../controllers/fixture/getFixtureByDateRange")

fixtureRouter.get("/search/:name", getFixtureByName);
fixtureRouter.get("/today", getTodaysFixtures)
fixtureRouter.get("/dates/:startDate/:endDate", getFixtureByDateRange)
fixtureRouter.get("/:id", getFixtureById);

module.exports = fixtureRouter;

