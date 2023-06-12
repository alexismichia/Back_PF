const { getLeagueFromAPI } = require("../../services/league/getLeague.service");

exports.getLeague = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const league = await getLeagueFromAPI(id);
    if (league) {
      res.status(200).json(league);
    } else {
      res.status(404).json({ message: "League not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
