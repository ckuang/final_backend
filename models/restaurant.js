"use strict"

module.exports = function(sequelize, DataTypes){
  const Restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    cost: DataTypes.INTEGER
  },
  {
    classMethods: {
      associate: function(models){
        Restaurant.hasMany(models.review)
      }
    }
  })

  return Restaurant;
};
