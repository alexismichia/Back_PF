const express = require("express")
const fixtureRouter = express.Router()

const {getFixtureById} = require("../controllers/fixture/getFixtureById")

fixtureRouter.get("/:id", getFixtureById)

module.exports = fixtureRouter