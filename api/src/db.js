require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User")
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/postgres`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//connects models to sequelize
UserModel(sequelize);

const {
  Team,
  Player,
  Standings,
  TeamSquad,
  Coach,
  Referee,
  Venue,
  TVStation,
  Probabilities,
  Rivals,
  News,
  User,
} = sequelize.models;

// Aca vendrian las relaciones
// Team.hasMany(Player, { foreignKey: 'team_id' });
// Player.belongsTo(Team, { foreignKey: 'team_id' });

// TeamSquad.belongsTo(Player, { foreignKey: 'player_id' });
// TeamSquad.belongsTo(Team, { foreignKey: 'team_id' });

// Team.hasMany(Coach, { foreignKey: 'team_id' });
// Coach.belongsTo(Team, { foreignKey: 'team_id' });

// Product.hasMany(Reviews);

module.exports = {
  conn: sequelize,
  ...sequelize.models,
  // Agrega los demás modelos aquí...
};
