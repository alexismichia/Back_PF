const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    // productId: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: true,
    //   references: {
    //     model: 'Products',
    //     key: 'id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE',
    //   },
    // },
    
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    paranoid: true,
  });

  
};