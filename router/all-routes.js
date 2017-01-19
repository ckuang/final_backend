const allRoutes = require('express').Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

//GET - all restaurants
const getAllRestaurants = ((req, res)=>{
	Restaurant.findAll()
	.then((restaurantInfo)=>{
		res.send(restaurantInfo)
	})
	.catch((err)=>{
		res.status(500).send('Error with api routes. Check routes for bugs.')
	})
});

//GET - single restaurant w/ reviews
const singleRestaurant = ((req, res)=>{
	Restaurant.findOne({
		where: {id: req.params.id},
		include: [Review]
	})
	.then((singleRestaurant)=>{
		res.send(singleRestaurant)
	})
	.catch((err)=>{
		res.status(500).send('Error with api routes. Check routes for bugs.')
	})
});

//POST - restaurant
const postRestaurant = ((req, res)=>{
	Restaurant.create(req.body)
	.then((restaurant)=>{
		res.send(restaurant)
	})
	.catch((err)=>{
		res.status(500).send('Error with api routes. Check routes for bugs.')
	})
});

//POST - review
const postReview = ((req, res)=>{
	Review.create(req.body)
	.then((review)=>{
		res.send(review)
	})
	.catch((err)=>{
		res.status(500).send('Error with api routes. Check routes for bugs.')
	})
});

//ROUTING: '/api/routes'
allRoutes.route('/restaurants')
	.get(getAllRestaurants)
	.post(postRestaurant)

allRoutes.route('/restaurants/:id')
	.get(singleRestaurant)

allRoutes.route('/review')
	.post(postReview)


module.exports = allRoutes;