const { getLeagueIdFromAPI } = require("../../services/league/getLeagueById.service");
const {League}= require("../../db")


exports.getLeagueById = async (req, res) => {
  const { id } = req.params;
  try {
    const league = await getLeagueIdFromAPI(id);
    if (league) {
      const newLeagueData = {
        id: league.id,
        name: league.name,
        active: league.active,
        short_code: league.short_code,
        image_path: league.image_path,
        type: league.type,
        sub_type: league.sub_type,
        last_played_at: league.last_played_at,
        category: league.category,
        has_jerseys: league.has_jerseys,
        
      };
      
      const newLeagues = await League.create(newLeagueData);
      res.status(200).json(newLeagues);
    } else {
      res.status(404).json({ message: "League not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
