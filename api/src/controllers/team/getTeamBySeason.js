const teamService = require('../../services/team/getTeam.service');
const  {Team} = require('../../db')


exports.getTeamBySeason = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await teamService.getTeamById(id);

    if (!team) {
      return res.status(404).json({ message: 'No team found' });
    }

    const { trophies,players, ...teamData } = team;

    console.log(team.players, team.trophies)
    const formattedTrophies = trophies?.map((trophy) => ({
      league_id: trophy.league_id,
      season_id: trophy.season_id,
    }));
    const processedPlayers = players?.map((player) => player.player_id);


    const [foundTeam, created] = await Team.findOrCreate({
      where: { id },
      defaults: {
        ...teamData,
        trophies: formattedTrophies,
        players: processedPlayers,
      },
    });

    if (!created) {
      return res.status(200).json(foundTeam.toJSON());
    }

    console.log(foundTeam.toJSON());
    res.status(200).json(foundTeam);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};