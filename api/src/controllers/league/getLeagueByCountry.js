const {
  getLeagueCountryFromAPI,
} = require("../../services/league/getLeagueByCountry.service");
const { League } = require("../../db");

exports.getLeagueByCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const league = await getLeagueCountryFromAPI(id);
    console.log(league)
    if (!league) {
      return res.status(404).json({ message: 'No League found' });
    }
      const [foundLeague, created] = await League.findOrCreate({
        where: { id },
        defaults: {
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
}})
  
      if (!created) {
        return res.status(200).json(foundLeague);
      }

      res.status(200).json(foundLeague);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }}