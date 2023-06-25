const { getStateGameIdFromAPI } = require("../../services/StateGame/StateGame.service");
const {State_game} = require("../../db")



exports.getStateGameById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const state = await getStateGameIdFromAPI(id);
      if (state) {
        let newstates;
        if (Array.isArray(state)) {
          const newStateDataPromises = state.map(async (item) => {
            const [newState, created] = await State_game.findOrCreate({
              where: { id: item.id },
              defaults: {
                id: item.id,
                state: item.state,
                name: item.name,
                short_name: item.short_name,
                developer_name: item.developer_name,
              },
            });
  
            return newState;
          });
  
          newstates = await Promise.all(newStateDataPromises);
        } else {
          const [newState, created] = await State_game.findOrCreate({
            where: { id: state.id },
            defaults: {
                id: state.id,
                state: state.state,
                name: state.name,
                short_name: state.short_name,
                developer_name: state.developer_name,
            },
          });
  
          newStates = [newState];
        }
  
        res.status(200).json(newStates);
      } else {
        res.status(404).json({ message: "State not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };