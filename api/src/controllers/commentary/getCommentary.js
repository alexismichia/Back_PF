const {getCommentaryFromAPI} = require("../../services/commentary/getCommentary.service")

exports.getCommentary = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await getCommentaryFromAPI(id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Commentary not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};