const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Standings', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    participant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    standing_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
