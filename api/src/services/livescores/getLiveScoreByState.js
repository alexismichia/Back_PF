const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.sportmonks.com/v3/football/livescores";
exports.getLiveScoreByStateFromAPI = async (id) => {
    const state = "state"
    const filter = `fixtureStates:${id}`
  try {
    const response = await axios.get(BASE_URL,{
      params:{
        api_token: API_KEY, 
        include: state,
        filters: filter
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};
