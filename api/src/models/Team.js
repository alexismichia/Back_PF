const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_code: {
      type: DataTypes.STRING,
      allowNull: true,
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
      allowNull: true,
    },
    placeholder: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    last_played_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    trophies: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
      get() {
        const rawValue = this.getDataValue('trophies');
        if (rawValue && Array.isArray(rawValue)) {
          return rawValue.map((trophy) => ({
            league_id: trophy.league_id,
            season_id: trophy.season_id,
          }));
        }
        return [];
      },
      set(value) {
        if (Array.isArray(value)) {
          const trophies = value.map((trophy) => ({
            league_id: trophy.league_id,
            season_id: trophy.season_id,
          }));
          this.setDataValue('trophies', trophies);
        } else {
          this.setDataValue('trophies', []);
        }
      },
    },
    players: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
      defaultValue: [],
    },
  }, {
    timestamps: false
  });
};

