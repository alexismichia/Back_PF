const teamService = require('../../services/team/getTeam.service');
const Team = require('../../models/Team');

exports.getTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamsByCountry(id); 
    if (team) {
      const newteam= await Team.create(team)
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'No team found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


 