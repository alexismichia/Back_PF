const {getTodaysFixturesFromAPI} = require("../../services/fixture/getTodaysFixtures.service");

exports.getTodaysFixtures = async (req, res) => {
  try {
    const fixture = await getTodaysFixturesFromAPI();
    if (fixture) {
      res.status(200).json(fixture);
    } else {
      res.status(404).json({ message: "Fixture not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};
