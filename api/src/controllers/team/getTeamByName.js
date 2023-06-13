const teamService = require('../../services/team/getTeam.service');

exports.getTeamByName = async (req, res) => {
  const { name } = req.params;
  try {
    const team = await teamService.getTeamByName(name); 
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'No team found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
