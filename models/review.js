"use strict";

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating: DataTypes.INTEGER,
    date: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Review.belongsTo(models.User);
        Review.belongsTo(models.Restaurant, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Review;
};