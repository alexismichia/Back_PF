const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('rounds', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  });
};
