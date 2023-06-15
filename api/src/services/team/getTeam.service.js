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
  let keepGoing = true;
  let nationalTeams = [];

  while (keepGoing) {
    const response = await axios.get(`${BASE_URL}?page=${page}`, {
      params: {
        api_token: API_KEY
      }
    });

    if (response.data && response.data.data && response.data.data.length > 0) {
      const newTeams = response.data.data;
      const nationalNewTeams = newTeams.filter(team => {
        const teamName = team.name.toUpperCase();
        return (
          team.type === 'national' &&
          !teamName.includes('U16') &&
          !teamName.includes('U17') &&
          !teamName.includes('U18') &&
          !teamName.includes('U19') &&
          !teamName.includes('U20') &&
          !teamName.includes('U21') &&
          !teamName.includes('U22') &&
          !teamName.includes('U23')
        );
      });

      nationalTeams = [...nationalTeams, ...nationalNewTeams];
      page++;
    } else {
      keepGoing = false;
    }
  }

  return nationalTeams;
};

teamService.getNationalTeambyName = async (name) => {
  const URL = `${BASE_URL}/search/${name}`;
  try {
    const response = await axios.get(URL, {
      params: {
        api_token: API_KEY
      }
    });
    const nationalTeams = response.data.data.filter(team => {
      const teamName = team.name;
      return (
        team.type === 'national' &&
        !teamName.includes('U16') &&
        !teamName.includes('U17') &&
        !teamName.includes('U18') &&
        !teamName.includes('U19') &&
        !teamName.includes('U20') &&
        !teamName.includes('U21') &&
        !teamName.includes('U22') &&
        !teamName.includes('U23')
      );
    });
    return nationalTeams;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};





module.exports = teamService;