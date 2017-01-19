'use strict';

module.exports = function(sequelize, DataTypes){
	var Restaurant = sequelize.define('Restaurant', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		neighborhood: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cuisine: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cost: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function(models){
				Restaurant.hasMany(models.Review)
			}
		}
	})
	return Restaurant;
}