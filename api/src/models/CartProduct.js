const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CartProduct = sequelize.define('CartProduct', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
});
  
    return CartProduct

};