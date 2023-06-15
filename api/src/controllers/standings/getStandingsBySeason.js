const standingService = require('../../services/standings/getStandings.service');

exports.getStandingsBySeason = async (req, res) => {
    const { id } = req.params;
  try {
    const standing = await standingService.getStandingsBySeason(id); 
    if (standing) {
      res.status(200).json(standing);
    } else {
      res.status(404).json({ message: 'No Standings found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
