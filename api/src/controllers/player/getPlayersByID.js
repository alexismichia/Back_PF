const {Players} = require("../../db")
const {getPlayerIdFromAPI}= require("../../services/Player/getPlayersByID.service")


exports.getPlayerById = async (req, res) => {
  const { id } = req.params;
  try {
    let playerIds = [];

    // Verificar si id es un array o un solo valor
    if (Array.isArray(id)) {
      playerIds = id;
    } else {
      playerIds.push(id);
    }

    const newPlayerDataPromises = playerIds.map(async (playerId) => {
      const player = await getPlayerIdFromAPI(playerId);
      if (player) {
        const [newPlayer, created] = await Players.findOrCreate({
          where: { id: player.id },
          defaults: {
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
          },
        });

        return newPlayer;
      }
    });

    const newPlayers = await Promise.all(newPlayerDataPromises);
    res.status(200).json(newPlayers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};





