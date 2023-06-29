
exports.getAllPlayers = async (req, res) => {
    try {
      const players = await getAllPlayersFromAPI();
      if (fixture) {
        res.status(200).json(fixture);
      } else {
        res.status(404).json({ message: "Fixture not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };