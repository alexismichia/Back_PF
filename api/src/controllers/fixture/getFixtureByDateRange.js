const {getFixtureByDateRangeFromAPI} = require("../../services/fixture/getFixtureByDateRangeFromAPI.service")

exports.getFixtureByDateRange = async (req, res) => {
  const { startDate, endDate } = req.params;
  try {
    const fixture = await getFixtureByDateRangeFromAPI(startDate, endDate);
    if (fixture) {
      res.status(200).json(fixture);
    } else {
      res.status(404).json({ message: "Fixture not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
