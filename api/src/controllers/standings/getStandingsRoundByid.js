const {Standings}= require("../../db");
const { getStandingsByRoundsId } = require("../../services/standings/getStandingRounId.service");


exports.getStandingRoundById = async (req, res) => {
    const { id } = req.params;
    try {
      const standing = await getStandingsByRoundsId(id);
      
      if (standing) {
        const newStandingDataPromises = standing.map(async (item) => {
          const [newStanding, created] = await Standings.findOrCreate({
            where: { id: item.id },
            defaults: {
              id: item.id,
            sport_id: item.sport_id,
            league_id: item.league_id,
            season_id: item.season_id,
            stage_id: item.stage_id,
            group_id: item.group_id,
            round_id: item.round_id,
            participant_id: item.participant_id,
            standing_rule_id: item.standing_rule_id,
            position: item.position,
            points: item.points,
            result: item.result, 
            },
          });
          console.log("valores del service",newStanding)
          return newStanding;
        });
  
        const newStandings = await Promise.all(newStandingDataPromises);
        res.status(200).json(newStandings);
    }}catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };