
// Models são arquivo que vão estruturar o banco de dados
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: 'uid'});
  };

  // User.create({email:"marina@gmail.com"});
  // User.create({name:"Silmara", email:"silmara@gmail.com"});

  return User;
};