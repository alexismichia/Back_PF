const  {Team} = require('../../db')


exports.getTeams = async (req, res) => {
    try {
      const teams = await Team.findAll();
  
      if (teams.length === 0) {
        return res.status(404).json({ message: 'No teams found' });
      }
  
      res.status(200).json(teams);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
