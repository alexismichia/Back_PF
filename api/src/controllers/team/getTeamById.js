const teamService = require('../../services/team/getTeam.service');
const  {Team} = require('../../db')


exports.getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamById(id); 
    if (team) {
      const newTeamData = {
        id: team.id,
        country_id: team.country_id,
        venue_id: team.venue_id,
        gender: team.gender,
        name: team.name,
        short_code: team.short_code,
        image_path: team.image_path,
        founded: team.founded,
        type: team.type,
        placeholder: team.placeholder,
        last_played_at: team.last_played_at
      };
      console.log(newTeamData);
      const newTeams = await Team.bulkCreate(newTeamData);
      res.status(200).json(newTeams);
    } else {
      res.status(404).json({ message: 'No team found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
