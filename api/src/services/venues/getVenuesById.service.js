const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.sportmonks.com/v3/football/venues";

exports.getVenuesIdFromAPI = async (id) => {
const URL = `${BASE_URL}/${id}`
  try {
    const response = await axios.get(URL,{
      params:{
        api_token: API_KEY
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};