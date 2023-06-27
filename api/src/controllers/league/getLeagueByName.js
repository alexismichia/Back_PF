const { getLeagueNameFromAPI } = require("../../services/league/getLeagueByName.service");
const {League}= require("../../db")


exports.getLeagueByName = async (req, res) => {
  const { name } = req.params;
// in api it needs us to include a space in the url, just write name as is 
  try {
    const league = await getLeagueNameFromAPI(name);
    if (league) {
      if (league.length === 1) {
        const newLeagueData = {
          id: league[0].id,
          name: league[0].name,
          active: league[0].active,
          short_code: league[0].short_code,
          image_path: league[0].image_path,
          type: league[0].type,
          sub_type: league[0].sub_type,
          last_played_at: league[0].last_played_at,
          category: league[0].category,
          has_jerseys: league[0].has_jerseys,
        };

        const [newLeague] = await League.findOrCreate({
          where: { id: newLeagueData.id },
          defaults: newLeagueData,
        });

        res.status(200).json(newLeague);
      } else {
        const allLeagueData = [];
        for (let i = 0; i < league.length; i++) {
          const newLeagueData = {
            id: league[i].id,
            name: league[i].name,
            active: league[i].active,
            short_code: league[i].short_code,
            image_path: league[i].image_path,
            type: league[i].type,
            sub_type: league[i].sub_type,
            last_played_at: league[i].last_played_at,
            category: league[i].category,
            has_jerseys: league[i].has_jerseys,
          };

          const newLeague = await League.findOrCreate({
            where: { id: newLeagueData.id },
            defaults: newLeagueData,
          });

          allLeagueData.push(newLeague);
        }

        console.log(allLeagueData);
        res.status(200).json(allLeagueData);
      }
    } else {
      res.status(404).json({ message: "League not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
