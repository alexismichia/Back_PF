const { getLeagueNameFromAPI } = require("../../services/league/getLeagueByName.service");

exports.getLeagueByName = async (req, res) => {
  const { name } = req.params;
// in api it needs us to include a space in the url, just write name as is 
  try {
    const league = await getLeagueNameFromAPI(name);
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
