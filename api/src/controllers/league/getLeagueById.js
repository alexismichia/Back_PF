const { getLeagueIdFromAPI } = require("../../services/league/getLeagueById.service");

exports.getLeagueById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const league = await getLeagueIdFromAPI(id);
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
