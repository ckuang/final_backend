'use strict';

module.exports = function (sequelize, DataTypes) {
    var Restaurant = sequelize.define('Restaurant', {
            name: {
                type: DataTypes.STRING,

            },
            neighborhood: {
                type: DataTypes.STRING
            },
            cuisine: {
                type: DataTypes.STRING
            },
            address: {
                type: DataTypes.STRING
            },
            cost: {
                type: DataTypes.INTEGER
            }

        },
        {
            classMethods: {
                associate: (models) => {
                    Restaurant.hasMany(models.Review)
                }
            }
        });
    return Restaurant;

};



