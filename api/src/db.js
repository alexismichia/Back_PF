require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

//const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  //logging: false, // set to console.log to see the raw SQL queries
  //native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//});

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/postgres`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
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
  User  } = sequelize.models;

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
  ...sequelize.models
  // Agrega los demás modelos aquí...
};
