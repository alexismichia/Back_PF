const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    sport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    founded: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    placeholder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    last_played_at: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    timestamps: false
  });
};
