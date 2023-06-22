const {getFixtureByTeamIdFromAPI} = require("../../services/fixture/getFixtureByTeamId")
exports.getFixtureByTeamId = async (req, res) => {
  const { startDate, endDate, id } = req.params;
  try {
    const fixture = await getFixtureByTeamIdFromAPI(startDate, endDate, id)
    if(fixture){
        res.status(200).json(fixture)
    }else{
        res.status(404).json({ message: "Fixture not found" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server error" });
  }
};
