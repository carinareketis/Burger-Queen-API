'use strict';

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.STRING
  }, {});

  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {foreignKey: 'uid'});
    //Orders ele pertence a tabela usuario , 1:n
    Orders.hasMany(models.OrdersProducts, {foreignKey: 'orderId'});
    //has many, tem muitos n:1
  };

    // Orders.create({status:"andamento", uid:"3"});
  return Orders;
};