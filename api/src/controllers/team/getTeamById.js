const teamService = require('../../services/team/getTeam.service');
const  {Team} = require('../../db')


exports.getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamById(id); 
    if (team) {
      const newTeamData = team.map((item) => ({
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
        last_played_at: item.last_played_at
      }));
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
