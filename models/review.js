"use strict"

module.exports = function(sequelize, DataTypes){
  const Review = sequelize.define('review', {
    rating: DataTypes.INTEGER,
    date: DataTypes.DATE,
    description: DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models){
        Review.belongsTo(models.restaurant, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  })

  return Review;
};
