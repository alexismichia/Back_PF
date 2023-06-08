const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('rivals', {
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rival_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
