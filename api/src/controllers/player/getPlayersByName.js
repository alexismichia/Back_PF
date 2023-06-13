const { PlayerService } = require("../../services/Player/getPlayers.service")

module.exports.getPlayersByName = async (req, res) => {
  const { name } = req.params;

  try {
    const players = await PlayerService(name);
    if (players && players.length > 0) {
      res.status(200).json(players);
    } else {
      res.status(404).json({ message: "No se encontraron jugadores" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};

  