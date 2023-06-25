const { PlayerService } = require("../../services/Player/getPlayers.service")
const {Players} = require("../../db")



module.exports.getPlayersByName = async (req, res) => {
  const { name } = req.params;

  try {
    const player = await PlayerService(name);
    if (player) {
      let newPlayers;
      if (Array.isArray(player)) {
        const newPlayerDataPromises = player.map(async (item) => {
          const [newPlayer, created] = await Players.findOrCreate({
            where: { name: item.name },
            defaults: {
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
            },
          });

          return newPlayer;
        });

        newPlayers = await Promise.all(newPlayerDataPromises);
      } else {
        const [newPlayer, created] = await Players.findOrCreate({
          where: { name: player.name },
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

        newPlayers = [newPlayer];
      }

      res.status(200).json(newPlayers);
    } else {
      res.status(404).json({ message: "Player not found" });
    }}
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error de servidor" });
  }
};

  