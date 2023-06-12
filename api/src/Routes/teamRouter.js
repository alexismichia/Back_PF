const express = require('express')

const teamRouter = express.Router()

const {getTeam} = require('../controllers/team/getTeamByCountry.js')
const {getTeamsById} = require('../controllers/team/getTeamById.js')    

teamRouter.get('/country/:id', getTeam)
teamRouter.get('/:id', getTeamsById)

module.exports = teamRouter