const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Team_schedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_current: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    starting_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    games_in_current_week: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    aggregates: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    rounds: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });
};
