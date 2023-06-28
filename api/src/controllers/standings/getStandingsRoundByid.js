const {Standings}= require("../../db");
const { getStandingsByRoundsId } = require("../../services/standings/getStandingRounId.service");


exports.getStandingRoundById = async (req, res) => {
    const { id } = req.params;
    try {
      const standing = await getStandingsByRoundsId(id);
      console.log("valores del service",standing)
      if (standing) {
        const newStandingDataPromises = standing.map(async (item) => {
          const [newStanding, created] = await Standings.findOrCreate({
            where: { id: item.id },
            defaults: {
              id: standing.id,
            sport_id: standing.sport_id,
            league_id: standing.league_id,
            season_id: standing.season_id,
            stage_id: standing.stage_id,
            group_id: standing.group_id,
            round_id: standing.round_id,
            participant_id: standing.participant_id,
            standing_rule_id: standing.standing_rule_id,
            position: standing.position,
            points: standing.points,
            result: standing.result, 
            },
          });
  
          return newStanding;
        });
  
        const newStandings = await Promise.all(newStandingDataPromises);
        res.status(200).json(newStandings);
    }}catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };