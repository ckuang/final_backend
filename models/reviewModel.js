"use strict";

module.exports = function(sequelize, DataTypes) {
  let Review = sequelize.define("Review", {
    rating: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Review;
}