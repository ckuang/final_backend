'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    rating: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Review.belongsTo(models.Restaurant);
      }
    }
  });
  return Review;
};