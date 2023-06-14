const { getschedulesBySeasonIdFromAPI } = require("../../services/schedules/schedulesBySeasonId.service");



exports.getschedulesBySeasonId = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const schedules = await getschedulesBySeasonIdFromAPI(id);
      if (schedules) {
        res.status(200).json(schedules);
      } else {
        res.status(404).json({ message: "Schedules Seasons not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };