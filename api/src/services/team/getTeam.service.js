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




module.exports = teamService;