const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Team_squad', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    transfer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detailed_position_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jersey_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  });
};
