'use strict';

module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define('Review', {
            rating: {
                type: DataTypes.STRING,

            },
            description: {
                type: DataTypes.STRING
            },
            date: {
                type: DataTypes.DATE
            }

        },
        {
            classMethods: {
                associate: (models) => {
                    Review.belongsTo(models.Restaurant)
                }
            }
        });
    return Review;
};
