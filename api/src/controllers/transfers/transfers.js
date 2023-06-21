const { gettranfersapi, getlatesttransfersapi, gettransfersidapi } = require("../../services/transfers/transfers.service");



exports.gettransfers = async (req, res) => {
    try {
      const transfers = await gettranfersapi();
      if (transfers) {
        res.status(200).json(transfers);
      } else {
        res.status(404).json({ message: "Transfers not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };

exports.getlastesttransfers = async (req, res) => {
    try {
      const transfers = await getlatesttransfersapi();
      if (transfers) {
        res.status(200).json(transfers);
      } else {
        res.status(404).json({ message: "Transfers not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };


 exports.gettransfersid = async (req, res) => {
    const { id } = req.params;
    try {
      const transfers = await gettransfersidapi(id);
      if (transfers) {
        res.status(200).json(transfers);
      } else {
        res.status(404).json({ message: "Transfers not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };