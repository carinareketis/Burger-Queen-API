'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrdersProducts = sequelize.define('OrdersProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});

  OrdersProducts.associate = function(models) {
    OrdersProducts.belongsTo(models.Product, {foreignKey: 'productId'})
    OrdersProducts.belongsTo(models.Orders, {foreignKey: 'orderId'})
  };

  // OrdersProducts.create({orderId:1, productId:1,});
  // OrdersProducts.create({orderId:2, productId:3});
  
  return OrdersProducts;
};