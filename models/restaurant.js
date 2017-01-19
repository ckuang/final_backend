// "use strict"

// THE MODEL FOR EACH RESTAURANT
module.exports = function(sequelize, DataTypes) {

  var Restaurant = sequelize.define("Restaurant",

    {
      name: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      address: DataTypes.STRING,
      cuisine: DataTypes.STRING,
      cost: DataTypes.INTEGER
    },

    {
      classMethods: { associate: function(db) {Restaurant.hasMany(db.Review)} }
    }

  );

  return Restaurant

};
