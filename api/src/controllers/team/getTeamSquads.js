// const {getTeamSquadsFromAPI} = require("../../services/team/getTeamSquads")
const {getTeamSquadsFromAPI} = require("../../services/team/getTeamSquads.service")
exports.getTeamSquads = async (req, res) => {
    const {id} = req.params
    try {
      const teams = await getTeamSquadsFromAPI(id);

      if(teams){
          res.status(200).json(teams);
      }
      else{
        res.status(400).json({error: "Teams not found"})
      }
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };