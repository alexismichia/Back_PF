const { getVenuesIdFromAPI } = require("../../services/venues/getVenuesById.service");




exports.getPlayerById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const venues = await getVenuesIdFromAPI(id);
      if (player) {
        res.status(200).json(venues);
      } else {
        res.status(404).json({ message: "Player not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };