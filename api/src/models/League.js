const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('League', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    short_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sub_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_played_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    has_jerseys: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
