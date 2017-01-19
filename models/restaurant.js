'use strict';

module.exports = (sequelize, DataTypes) => {
	const Restaurant = sequelize.define('Restaurant', {
		name: DataTypes.STRING,
		neighborhood: DataTypes.STRING,
		address: DataTypes.STRING,
		cuisine: DataTypes.STRING,
		cost: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				Restaurant.belongsTo(models.Review)
			}
		}
	})
	return Restaurant 
}