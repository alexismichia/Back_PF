const { gettypesapi } = require("../../services/types/types.service");



exports.gettypes = async (req, res) => {
    try {
      const types = await gettypesapi();
      if (types) {
        res.status(200).json(types);
      } else {
        res.status(404).json({ message: "Types not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };