const { PlayerService } = require("../../services/Player/getPlayers.service")
const {Players} = require("../../db")



module.exports.getPlayersByName = async (req, res) => {
  const { name } = req.params;

  try {
    const players = await PlayerService(name);
    if (players && players.length > 0) {
      if (players.length > 1) {
        // Si hay varios nombres
        const newPlayerData = players.map((item) => ({
          id: item.id,
          sport_id: item.sport_id,
          country_id: item.country_id,
          nationality_id: item.nationality_id,
          city_id: item.city_id,
          position_id: item.position_id,
          detailed_position_id: item.detailed_position_id,
          type_id: item.type_id,
          common_name: item.common_name,
          firstname: item.firstname,
          lastname: item.lastname,
          name: item.name,
          display_name: item.display_name,
          image_path: item.image_path,
          height: item.height,
          weight: item.weight,
          date_of_birth: item.date_of_birth,
          gender: item.gender,
        }));
        const newPlayers = await Players.bulkCreate(newPlayerData);
        res.status(200).json(newPlayers);
      } else if (players.length === 1) {
        // Si hay un solo nombre
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
      res.status(404).json({ message: "No se encontraron jugadores" });
    }
  } }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};

  