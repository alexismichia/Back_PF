const { getLeagueNameFromAPI } = require("../../services/league/getLeagueByName.service");
const {League}= require("../../db")


exports.getLeagueByName = async (req, res) => {
  const { name } = req.params;
// in api it needs us to include a space in the url, just write name as is 
  try {
    const league = await getLeagueNameFromAPI(name);
    if (league) {
      if (league.length > 1) {
        // Si hay varios nombres
        const newLeagueData = league.map((item) => ({
          id: item.id,
          name: item.name,
          active: item.active,
          short_code: item.short_code,
          image_path: item.image_path,
          type: item.type,
          sub_type: item.sub_type,
          last_played_at: item.last_played_at,
          category: item.category,
          has_jerseys: item.has_jerseys,
          
        }));
        const newLeagues = await League.bulkCreate(newLeagueData);
        res.status(200).json(newLeagues);
      } else if (league.length === 1) {
        // Si hay un solo nombre
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
  }} catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
