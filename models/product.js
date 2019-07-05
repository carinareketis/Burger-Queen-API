'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});

  Product.associate = function(models) {
    Product.hasMany(models.OrdersProducts, {foreignKey: 'productId'});
  };

    // Product.create({name:"Bebida gaseificada 750ml",price:"10"});
  return Product;
};