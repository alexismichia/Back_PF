const {getStatisticsByParticipantFromAPI} = require("../../services/statistics/getStatisticsByParticipant")
exports.getStatisticsByParticipant = async (req, res) =>{
    const {participant, id} = req.params
    try {
        const statistics = await getStatisticsByParticipantFromAPI(participant, id)
        if (statistics) {
            res.status(200).json(statistics);
          } else {
            res.status(404).json({ message: "Statistics not found" });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server error" });
        }
      };
      