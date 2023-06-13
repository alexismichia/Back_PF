const { getLeagueTeamFromAPI } = require("../../services/league/getLeagueByTeam.service");

exports.getLeagueByTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const league = getLeagueTeamFromAPI(id);
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
