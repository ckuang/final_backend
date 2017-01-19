var Sequelize = require('sequelize');
var Sequelize = require(__dirname + "/lib/sequelize/index")



module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    classMethods: {
      associate: function(models) {
        Review.hasOne(models.Restaurant);
      }
    }
});

    return Review;
};
