"use strict";

module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        rating: DataTypes.INTEGER,
        description: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                Review.belongsTo(models.Restaurant);
            }
        }
    });
    return Review;
};
