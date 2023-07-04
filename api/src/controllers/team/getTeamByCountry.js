const teamService = require('../../services/team/getTeam.service');
const { Team } = require('../../db');

exports.getTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamsByCountry(id);
    
    if (team) {
      const newTeamDataPromises = team.map(async (item) => {
        const { trophies, players, ...teamData } = item;

        const formattedTrophies = trophies?.map((trophy) => ({
          league_id: trophy.league_id,
          season_id: trophy.season_id,
        }));
        const processedPlayers = players?.map((player) => player.player_id);

        const [newTeam, created] = await Team.findOrCreate({
          where: { id: item.id },
          defaults: {
            ...teamData,
            trophies: formattedTrophies,
            players: processedPlayers,
          },
        });

        return newTeam;
      });

      const newTeams = await Promise.all(newTeamDataPromises);
      res.status(200).json(newTeams);
    } else {
      res.status(404).json({ message: 'No teams found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};