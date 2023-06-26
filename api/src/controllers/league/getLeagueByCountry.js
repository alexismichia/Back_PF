const {
  getLeagueCountryFromAPI,
} = require("../../services/league/getLeagueByCountry.service");
const { League } = require("../../db");

exports.getLeagueByCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const league = await getLeagueCountryFromAPI(id);
    if(league){

      if(league.length = 1){
        const newLeagueData = {id: league.id,
          name: league.name,
          active: league.active,
          short_code: league.short_code,
          image_path: league.image_path,
          type: league.type,
          sub_type: league.sub_type,
          last_played_at: league.last_played_at,
          category: league.category,
          has_jerseys: league.has_jerseys,}
  
          const newLeague = await League.findOrCreate({where:{id: newLeagueData.id}, defaults: newLeagueData})
      res.status(200).json(newLeague)}
      else{
        const allLeagueData = []
        for(let i = 0; i < league.length; i++){
          const newLeagueData = {id: league.id,
            name: league.name,
            active: league.active,
            short_code: league.short_code,
            image_path: league.image_path,
            type: league.type,
            sub_type: league.sub_type,
            last_played_at: league.last_played_at,
            category: league.category,
            has_jerseys: league.has_jerseys,}
            console.log(newLeague)
            const newLeague = await League.findOrCreate({where:{id: newLeagueData.id}, defaults: newLeagueData})
            allLeagueData.push(newLeague)
        }
        console.log(allLeagueData)
        res.status(200).json(allLeagueData)
      }
    }
    else{res.status(404).json({ message: "League not found" });}
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }}