const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('state_game', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    developer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};
