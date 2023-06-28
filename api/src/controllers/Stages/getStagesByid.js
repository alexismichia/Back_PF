const { getStagesIdFromAPI } = require("../../services/stages/stagesByid.service");
const  {Stage} = require('../../db')

exports.getStagesById = async (req, res) => {
    const { id } = req.params;
    try {
      const stage = await getStagesIdFromAPI(id);
  
      if (!stage) {
        return res.status(404).json({ message: 'No stage found' });
      }
  
      const [foundStage, created] = await Stage.findOrCreate({
        where: { id },
        defaults: {
            id: stage.id,
            sport_id: stage.sport_id,
            league_id: stage.league_id,
            season_id: stage.season_id,
            type_id: stage.type_id,
            name: stage.name,
            sort_order: stage.sort_order,
            finished: stage.finished,
            is_current: stage.is_current,
            starting_at: stage.starting_at,
            ending_at: stage.ending_at,
            games_in_current_week: stage.games_in_current_week
        }
      });
  
      if (!created) {
        return res.status(200).json(foundStage.toJSON());
      }
      
      console.log(foundStage.toJSON());
      res.status(200).json(foundStage);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };