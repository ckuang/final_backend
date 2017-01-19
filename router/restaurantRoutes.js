const restaurantRouter = require('express').Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

const allRestaurants = (req, res) => {
	Restaurant.findAll()
	.then((restaurants) => {
		res.send(restaurants)
	})
	.catch((err) => console.log(err))
}

const createRestaurant = (req, res) => {
	Restaurant.create(req.body)
	.then((restaurant) => {
		res.send(restaurant)
	})
	.catch((err) => console.log(err))
}

const oneRestaurant = (req, res) => {
	Restaurant.findById(req.params.id, 
	{
		include: [ Review ]
	})
	.then((restaurant) => {
		res.send(restaurant)
	})
	.catch((err) => console.log(err))
}

const writeReview = (req, res) => {
	Review.create(req.body)
	.then((review) => {
		res.send(review)
	})
	.catch((err) => console.log(err))
}

restaurantRouter.route('/')
	.get(allRestaurants)
	.post(createRestaurant)

restaurantRouter.route('/:id')
	.get(oneRestaurant)
	.post(writeReview)

module.exports = restaurantRouter;
