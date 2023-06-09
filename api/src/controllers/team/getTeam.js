const TeamService = require


module.exports.getTeams = async (req, res) => {
    try {
      const allTeams = await TeamService.getAllTeamsAsync();
      if (allTeams && allTeams.length > 0) {
        res.status(200).json(allTeams);
      } else {
        res.status(404).json({ message: "No se encontro el equipo" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };