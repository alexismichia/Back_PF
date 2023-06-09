const NationalTeamService = require


module.exports.getNationalTeams = async (req, res) => {
    try {
      const allNationalTeams = await NationalTeamService.getAllNationalTeamsAsync();
      if (allNationalTeams && allNationalTeams.length > 0) {
        res.status(200).json(allNationalTeams);
      } else {
        res.status(404).json({ message: "No se encontro la seleccion" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };