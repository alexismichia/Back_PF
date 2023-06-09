const LigueService = require


module.exports.getLigues = async (req, res) => {
    try {
      const allLigues = await LigueService.getAllLiguesAsync();
      if (allLigues && allLigues.length > 0) {
        res.status(200).json(allLigues);
      } else {
        res.status(404).json({ message: "No se encontro la liga" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };