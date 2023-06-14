const { getschedulesByTeamIdFromAPI } = require("../../services/schedules/schedulesByTeamId.service");



exports.getschedulesByTeamId = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const schedules = await getschedulesByTeamIdFromAPI(id);
      if (schedules) {
        res.status(200).json(schedules);
      } else {
        res.status(404).json({ message: "Schedules Teams not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };