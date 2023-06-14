const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.sportmonks.com/v3/football/leagues/teams";

exports.getLeagueTeamFromAPI = async (id) => {
  let URL = `${BASE_URL}/${id}`;
  const allData = [];
  try {
    while (URL) {
      const response = await axios.get(URL, {
        params: {
          // per_page:2, for tests
          api_token: API_KEY,
        },
      });
      const responseData = response.data.data;
      allData.push(...responseData);

      const pagination = response.data.pagination;
      URL = pagination.next_page;

      if (!pagination.has_more) {
        URL = null;
      }
    }
    return allData;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    throw error;
  }
};
