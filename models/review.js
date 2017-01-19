'use strict';

module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define('Review', {
		rating: DataTypes.INTEGER,
		date: DataTypes.DATE,
		description: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Review.hasMany(models.Restaurant)
			}
		}
	})
	return Review 
}