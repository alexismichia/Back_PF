const { getVenuesIdFromAPI } = require("../../services/venues/getVenuesById.service");




exports.getVenuesById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const venues = await getVenuesIdFromAPI(id);
      if (venues) {
        res.status(200).json(venues);
      } else {
        res.status(404).json({ message: "Estadios not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };