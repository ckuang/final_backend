var Sequelize = require('sequelize');
var Sequelize = require(__dirname + "/lib/sequelize/index")


module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    neighborhood: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cost: {
      type: Sequelize.INTEGER,
      allowNull: false
    }, {
    classMethods:{
      associate: functions(models) {
        Restaurant.hasMany(models.Review);
      }
    }
  }
});

    return Restaurant;
};
