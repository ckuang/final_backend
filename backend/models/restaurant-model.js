"use strict";

module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Restaurant.hasOne(models.Review)
      }
    }
  });

  return Restaurant;
};