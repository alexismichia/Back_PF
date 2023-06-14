const axios = require('axios');
require('dotenv').config();
let teamService = {};

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.sportmonks.com/v3/football/teams';

teamService.getTeamByCountry = async (id) => {
  const URL = `${BASE_URL}/countries/${id}`; 
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

teamService.getTeamById = async (id) => {
  const URL = `${BASE_URL}/${id}`;
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

teamService.getTeamBySeason = async (id) => {
  const URL = `${BASE_URL}/seasons/${id}`;
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

teamService.getTeamByName = async (name) => {
  const URL = `${BASE_URL}/search/${name}`;
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

teamService.getNationalTeam = async () => {
  let page = 1;
  let teams = [];
  let nationalTeams = [];

  do {
    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          page: page++,
          api_token: API_KEY
        }
      });

      teams = response.data.data;
      const filteredTeams = teams.filter(team => team.type === 'national' && !team.name.includes('U16') && !team.name.includes('U17') && !team.name.includes('U18') && !team.name.includes('U19') && !team.name.includes('U20')&& !team.name.includes('U21')&& !team.name.includes('U23'));
      nationalTeams = [...nationalTeams, ...filteredTeams];

    } catch (error) {
      console.error(`Error fetching data from API: ${error}`);
      throw error;
    }
  } while (teams.length > 0);

  return nationalTeams;
};




module.exports = teamService;