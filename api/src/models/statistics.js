const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('statistics', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    relation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    value: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
};
