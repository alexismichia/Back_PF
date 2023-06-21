const { getcoachsapi, getcoachsidapi } = require("../../services/coachs/coachs.service");



exports.getcoachs = async (req, res) => {
    try {
      const coachs = await getcoachsapi();
      if (coachs) {
        res.status(200).json(coachs);
      } else {
        res.status(404).json({ message: "Coachs not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };

 exports.getcoachsid = async (req, res) => {
    const { id } = req.params;
    try {
      const coachs = await getcoachsidapi(id);
      if (coachs) {
        res.status(200).json(coachs);
      } else {
        res.status(404).json({ message: "Coachs not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };