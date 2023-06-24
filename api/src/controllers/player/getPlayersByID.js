const { getPlayerIdFromAPI } = require("../../services/Player/getPlayersByID.service");
const {Players} = require("../../db")

exports.getPlayerById = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const player = await getPlayerIdFromAPI(id);
    if (player) {
      const newPlayerData = {
        id: player.id,
        sport_id: player.sport_id,
        country_id: player.country_id,
        nationality_id: player.nationality_id,
        city_id: player.city_id,
        position_id: player.position_id,
        detailed_position_id: player.detailed_position_id,
        type_id: player.type_id,
        common_name: player.common_name,
        firstname: player.firstname,
        lastname: player.lastname,
        name: player.name,
        display_name: player.display_name,
        image_path: player.image_path,
        height: player.height,
        weight: player.weight,
        date_of_birth: player.date_of_birth,
        gender: player.gender,
      };
      
      const newPlayers = await Players.create(newPlayerData);
      res.status(200).json(newPlayers);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
