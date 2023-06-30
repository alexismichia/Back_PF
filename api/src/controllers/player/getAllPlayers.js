const {getAllPlayersFromAPI} = require("../../services/Player/getAllPlayers.service")
exports.getAllPlayers = async (req, res) => {
    try {
      const players = await getAllPlayersFromAPI();
      if (players) {
        res.status(200).json(players);
      } else {
        res.status(404).json({ message: "Players not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };