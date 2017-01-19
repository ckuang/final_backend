const restaurantRouter = require('express').Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;


const getRestaurants = (req, res) => {
	Restaurant.findAll()
	.then((restaurants) => {
		res.send(restaurants)
	})
	.catch((err) => {
		console.log('ERROR GETTING ALL RESTAURANTS======>', err)
		res.sendStatus(500)
	})
};

const getRestaurant = (req, res) => {
	Restaurant.findById(req.params.id, {include: [Review]})
	.then((info) => {
		res.send(info)
	})
	.catch((err) => {
		console.log('ERROR GETTING RESTAURANT WITH ITS REVIEWS======>', err)
		res.sendStatus(500)
	})
};

const addRestaurant = (req, res) => {
	Restaurant.create(req.body)
	.then((restaurant) => {
		res.send(restaurant)
	})
	.catch((err) => {
		console.log('ERROR CREATING NEW RESTAURANT======>', err)
		res.sendStatus(500)
	})
};


//Present URL is "/api/restaurants"
restaurantRouter.route('/')
	.get(getRestaurants)
	.post(addRestaurant)

restaurantRouter.route('/:id')
	.get(getRestaurant)

module.exports = restaurantRouter;