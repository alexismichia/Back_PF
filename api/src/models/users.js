const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: { 
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
    },
    favorite_players: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    favorite_teams: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
  });
};
