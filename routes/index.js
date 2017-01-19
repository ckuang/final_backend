const restaurant = require('./restaurant-router')
const restaurants = require('./restaurants-router')
const review = require('./review-router')

module.exports = {
	restaurantRouterFile: restaurant,
	restaurantsRouterFile: restaurants,
	reviewRouterFile: review
}