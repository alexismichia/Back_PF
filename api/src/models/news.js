const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('News', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sourceName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'source_name', // Nombre de la columna en la tabla de base de datos
    },
    sourceUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'source_url', // Nombre de la columna en la tabla de base de datos
    },
  });
};

