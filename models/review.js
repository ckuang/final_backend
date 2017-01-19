'use strict';

module.exports = function(sequelize, DataTypes){
	var Review = sequelize.define('Review', {
		rating: {
			type: DataTypes.INTEGER
		},
		date: {
			type: DataTypes.DATE
		},
		description: {
			type: DataTypes.STRING
		}
	}, {
		classMethods: {
			associate: function(models){
				Review.belongsTo(models.Restaurant)
			}
		}
	})
	return Review;
}