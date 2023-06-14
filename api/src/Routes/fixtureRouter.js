const express = require("express");
const fixtureRouter = express.Router();

const { getFixtureById } = require("../controllers/fixture/getFixtureById");
const { getFixtureByName } = require("../controllers/fixture/getFixtureByName");
const { getTodaysFixtures } = require("../controllers/fixture/getTodaysFixtures")

fixtureRouter.get("/search/:name", getFixtureByName);
fixtureRouter.get("/today", getTodaysFixtures)
fixtureRouter.get("/:id", getFixtureById);

module.exports = fixtureRouter;

