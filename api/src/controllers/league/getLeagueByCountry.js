const { getLeagueCountryFromAPI } = require("../../services/league/getLeagueByCountry.service");

exports.getLeagueByCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const league = await getLeagueCountryFromAPI(id);
    if (league) {
      res.status(200).json(league);
    } else {
      res.status(404).json({ message: "League not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};
