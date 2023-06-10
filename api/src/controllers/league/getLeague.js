const LeagueService = require


module.exports.getLeagues = async (req, res) => {
    try {
      const allLeagues = await LeagueService.getAllLeaguesAsync();
      if (allLeagues && allLeagues.length > 0) {
        res.status(200).json(allLeagues);
      } else {
        res.status(404).json({ message: "No se encontro la liga" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };