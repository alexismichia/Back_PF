const express = require("express");
const { getTeams } = require("../controllers/team/getTeam");

const teamRouter = express.Router();

const {getTeam} = require('../controllers/team/getTeam.js')

teamRouter.get('/:id', getTeam)

module.exports = teamRouter


