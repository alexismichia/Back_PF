const {getLiveScoreFromAPI} = require("../../services/livescores/getLiveScore")

exports.getLiveScore = async (req, res) => {
  try {
    const livescores = await getLiveScoreFromAPI();
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