const { getVenuesNameFromAPI } = require("../../services/venues/getVenuesByName.service");



module.exports.getPlayersByName = async (req, res) => {
    const { name } = req.params;
  
    try {
      const venues = await getVenuesNameFromAPI(name);
      if (players && players.length > 0) {
        res.status(200).json(venues);
      } else {
        res.status(404).json({ message: "No se encontraron jugadores" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };