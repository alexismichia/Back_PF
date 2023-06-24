const teamService = require('../../services/team/getTeam.service');
const  {Team} = require('../../db')


exports.getTeamByName = async (req, res) => {
  const { name } = req.params;
  try {
    const team = await teamService.getTeamByName(name); 
    if (team) {
      if (team.length > 1) {
        // Si hay varios nombres
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
        const newTeams = await Team.bulkCreate(newTeamData);
        res.status(200).json(newTeams);
      } else if (team.length === 1) {
        // Si hay un solo nombre
        const newTeamData = {
          id: team.id,
          country_id: teamç.country_id,
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
        
        const newTeams = await Team.create(newTeamData);
        res.status(200).json(newTeams);
    } else {
      res.status(404).json({ message: 'No team found' });
    }
  }} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
