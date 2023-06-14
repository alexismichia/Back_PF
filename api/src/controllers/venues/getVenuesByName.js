const { getVenuesNameFromAPI } = require("../../services/venues/getVenuesByName.service");



module.exports.getVenuesByName = async (req, res) => {
    const { name } = req.params;
  
    try {
      const venues = await getVenuesNameFromAPI(name);
      if (venues && venues.length > 0) {
        res.status(200).json(venues);
      } else {
        res.status(404).json({ message: "No se encontraron estadios" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };