require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {
  CoachModel,
  FixtureModel,
  LiveScoreModel,
  NewsModel,
  PlayerModel,
  ProbabilitiesModel,
  RefereeModel,
  RivalModel,
  RoundModel,
  Season_scheduleModel,
  SeasonModel,
  StageModel,
  StandingsModel,
  State_gameModel,
  StatisticsModel,
  Team_scheduleModel,
  Team_squadModel,
  TeamModel,
  TopscoreModel,
  TournamentModel,
  TransferModel,
  Tv_stationModel,
  TypeModel,
  UserModel,
  VenueModel,
  LeagueModel,
} = require("./models/index");

 const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/postgres`,
   {
     logging: false,
     native: false,
   }
 );
/* const { DATABASE_URL, PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

const sequelize = new Sequelize(
  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    logging: false,
    native: false,
  }
); */
//connects models to sequelize
CoachModel(sequelize);
FixtureModel(sequelize);
LiveScoreModel(sequelize);
NewsModel(sequelize);
PlayerModel(sequelize);
ProbabilitiesModel(sequelize);
RefereeModel(sequelize);
RivalModel(sequelize);
RoundModel(sequelize);
Season_scheduleModel(sequelize);
SeasonModel(sequelize);
StageModel(sequelize);
StandingsModel(sequelize);
State_gameModel(sequelize);
StatisticsModel(sequelize);
Team_scheduleModel(sequelize);
Team_squadModel(sequelize);
TeamModel(sequelize);
TopscoreModel(sequelize);
TournamentModel(sequelize);
TransferModel(sequelize);
Tv_stationModel(sequelize);
TypeModel(sequelize);
UserModel(sequelize);
VenueModel(sequelize);
LeagueModel(sequelize);

const {
  Team,
  Players,
  Standings,
  Team_squad,
  Coach,
  Referee,
  Venue,
  TV_station,
  Probabilities,
  Rival,
  News,
  User,
  Fixture,
  Live_Score, 
  Round,
  Season_schedule,
  Season,
  Stage,
  State_game,
  Statistics,
  Team_schedule,
  Topscore,
  Tournament,
  Transfer,
  Type,
  League,
  


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
