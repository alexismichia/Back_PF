const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Probabilities', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    fixture_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    predictions: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
