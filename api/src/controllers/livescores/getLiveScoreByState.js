const {getLiveScoreByStateFromAPI} = require("../../services/livescores/getLiveScoreByState")

exports.getLiveScoreByState = async (req, res) => {
    const {id} = req.params
  try {
    const livescores = await getLiveScoreByStateFromAPI(id);
    if (livescores) {
      res.status(200).json(livescores);
    } else {
      res.status(404).json({ message: "LiveScores not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
