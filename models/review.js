// "use strict";

// THE MODEL FOR EACH REVIEW
module.exports = function(sequelize, DataTypes) {

  var Review = sequelize.define("Review",
    
    {
      rating: DataTypes.INTEGER,
      date: DataTypes.DATE,
      description: DataTypes.STRING,      
    },

   

  {
    classMethods: {

      associate: function(db) {Review.belongsTo(db.Restaurant)}
      
    }
  })

  return Review
};

