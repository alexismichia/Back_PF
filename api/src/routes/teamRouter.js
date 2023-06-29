const express = require('express')

const teamRouter = express.Router()

const {getTeam} = require('../controllers/team/getTeamByCountry.js')
const {getTeamById} = require('../controllers/team/getTeamById.js')    
const {getTeamBySeason} = require('../controllers/team/getTeamBySeason.js')
const {getTeamByName} = require('../controllers/team/getTeamByName.js')



teamRouter.get('/country/:id', getTeam)
teamRouter.get('/:id', getTeamById)
teamRouter.get('/season/:id', getTeamBySeason)
teamRouter.get('/search/:name', getTeamByName)
module.exports = teamRouter