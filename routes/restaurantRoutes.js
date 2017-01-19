const restRouter = require('express').Router();

//Models
const Restaurant = require('../models').Restaurant;

const fetchAllRestaurants = (req, res) => {
	Restaurant.findAll({})
		.then( (restaurants) => {
			res.send(restaurants);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};

const createNewRestaurant = (req, res) => {
	Restaurant.create(req.body)
		.then( (newRestaurant) => {
			res.send(newRestaurant);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};

const fetchRestaurantReviews = (req, res) => {
	Restaurant.findById(req.params.id, {
		include: [{all:true}]
	})
	.then( (restaurant) => {
		res.send(restaurant);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

restRouter.route('/')
	.get(fetchAllRestaurants)
	.post(createNewRestaurant);

restRouter.route('/:id')
	.get(fetchRestaurantReviews);

module.exports = restRouter;