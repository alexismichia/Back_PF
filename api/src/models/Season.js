const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Season', {
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
    tie_breaker_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    pending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_current: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    starting_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ending_at: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    standings_recalculated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    games_in_current_week: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
