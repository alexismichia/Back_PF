const axios = require('axios');
require('dotenv').config();
let standingService = {};

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.sportmonks.com/v3/football';

standingService.getStandings= async () => {
  const URL = `${BASE_URL}/standings`; 
  try {
    const response = await axios.get(URL, {
      params: {
        api_token: API_KEY
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};

standingService.getStandingsBySeasonAndLeague = async (seasonId, leagueId = null) => {
  const URL = `${BASE_URL}/standings/seasons/${seasonId}`;
  try {
      const params = { api_token: API_KEY };
      if (leagueId !== null) {
          params.league_id = leagueId;
      }
      const response = await axios.get(URL, { params });
      return response.data.data;
  } catch (error) {
      console.error(`Error fetching data from API: ${error}`);
      throw error;
  }
};


module.exports = standingService;