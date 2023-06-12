const PlayerService = require


module.exports.getPlayers = async (req, res) => {
    try {
      const allPlayers = await PlayerService.getAllPlayersAsync();
      if (allPlayers && allPlayers.length > 0) {
        res.status(200).json(allPlayers);
      } else {
        res.status(404).json({ message: "No se encontraron jugadores" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };
  