const standingService = require("../../services/standings/getStandings.service");
const {Standings}= require("../../db")


exports.getStandingRoundById = async (req, res) => {
    const { id } = req.params;
    try {
      const standing = await standingService.getStandingsByRoundsId(id);
  
      if (!standing) {
        return res.status(404).json({ message: 'No standing found' });
      }
  
      const [foundStanding, created] = await Standings.findOrCreate({
        where: { id },
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
          
        }
      });
  
      if (!created) {
        return res.status(200).json(foundStanding.toJSON());
      }
      
      console.log(foundStanding.toJSON());
      res.status(200).json(foundStanding);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };