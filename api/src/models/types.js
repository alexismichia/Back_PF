const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    developer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stat_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false
  });
};
