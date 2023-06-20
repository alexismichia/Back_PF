const {getLiveScoreFromAPI} = require("../../services/livescores/getLiveScore")
const {getLiveScoreInplayFromAPI} = require("../../services/livescores/getLiveScoreInplay")
exports.getLiveScore = async (req, res) => {
    const {inplay} = req.query
  try {
    if(inplay){
        const livescores = await getLiveScoreInplayFromAPI();
        if (livescores) {
          res.status(200).json(livescores);
        } else {
          res.status(404).json({ message: "LiveScores not found" });
        }
    }else{
        const livescores = await getLiveScoreFromAPI();
        if (livescores) {
          res.status(200).json(livescores);
        } else {
          res.status(404).json({ message: "LiveScores not found" });
        }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};