const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fixture_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
