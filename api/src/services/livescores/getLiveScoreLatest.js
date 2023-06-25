const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.sportmonks.com/v3/football/livescores";
const includes = "league;venue;state;lineups;events;comments;statistics;periods;participants;referees;scores"
exports.getLiveScoreLatestFromAPI = async () => {
  try {
    const response = await axios.get(BASE_URL,{
      params:{
        api_token: API_KEY,
        include: includes
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};
