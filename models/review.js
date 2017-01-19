
'use strict';

module.exports = function (sequelize, DataTypes) {
    let Review = sequelize.define('Review', {
            rating: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE,
            },
            description: {
                type: DataTypes.STRING
            }
        },

        {
            classMethods: {
                associate: (models)=> {
                    Review.belongsTo(models.Restaurant)
                }
            }
        })
    return Review;

};