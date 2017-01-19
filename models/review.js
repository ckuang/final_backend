'use strict'

module.exports = function(sequelize, DataTypes){
	let Review = sequelize.define('Review', {
		rating: {
			type: DataTypes.INTEGER, 
			allowNull: false
		},
		date: {
			type: DataTypes.DATE, 
			allowNull: false
		},
		description: {
			type: DataTypes.STRING, 
			allowNull: false
		}
	}, 
	{
		classMethods: {
			associate: function(models){
				Review.belongsTo(models.Restaurant)
			}
		}
	})
	return Review
};