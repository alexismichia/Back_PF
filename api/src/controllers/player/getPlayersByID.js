const { getPlayerIdFromAPI } = require("../../services/Player/getPlayersByID.service");

exports.getPlayerById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const player = await getPlayerIdFromAPI(id);
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
