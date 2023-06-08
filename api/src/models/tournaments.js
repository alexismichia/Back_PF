const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tournaments', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    short_code: {
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
    sub_type: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
      defaultValue: false,
    }
  }, {
    timestamps: false
  });
};
