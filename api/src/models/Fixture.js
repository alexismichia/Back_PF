const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Fixture', {
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
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    aggregate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    result_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    leg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    placeholder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    has_odds: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    starting_at_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true,
    }
  }, {
    timestamps: false
  });
};
