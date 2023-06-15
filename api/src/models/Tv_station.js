const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Tv_station', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    related_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
