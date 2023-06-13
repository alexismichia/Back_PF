const { getPlayersIdFromAPI } = require("../../services/Player/getPlayersByID.service")

exports.getPlayerById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const league = await getPlayersIdFromAPI(id);
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