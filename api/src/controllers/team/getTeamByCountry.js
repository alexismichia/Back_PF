const teamService = require('../../services/team/getTeam.service');
const  {Team} = require('../../db')

exports.getTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamsByCountry(id); 
    if (team) {
      const newTeamDataPromises = team.map(async (item) => {
        const [newTeam, created] = await Team.findOrCreate({
          where: { id: item.id },
          defaults: {
            id: item.id,
            country_id: item.country_id,
            venue_id: item.venue_id,
            gender: item.gender,
            name: item.name,
            short_code: item.short_code,
            image_path: item.image_path,
            founded: item.founded,
            type: item.type,
            placeholder: item.placeholder,
            last_played_at: item.last_played_at,
          },
        });

        return newTeam;
      });

      const newTeams = await Promise.all(newTeamDataPromises);
      res.status(200).json(newTeams);
  }} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


 