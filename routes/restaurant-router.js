const router = require("express").Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

const getAllRestaurants = (req,res) => {
	Restaurant.findAll({}
	).then((restaurants) =>{
		res.send(restaurants)}
	)
};

const getSingleRestaurant = (req,res) => {
	Restaurant.findById(req.params.id,
		{include: [Review]}
	).then((review)=>{
		res.send(review)
	})
};

const postNewRestaurant = (req,res)=>{
	Restaurant.create({
		name: req.body.name,
    	neighborhood: req.body.neighborhood,
    	bio: req.body.bio,
    	cuisine: req.body.cuisine,
    	cost: req.body.cost
    }).then((restaurant) =>{
		console.log('Restaurant created!')
		res.send(restaurant)
	})
};

router.route('/')
	.get(getAllRestaurants)
	.post(postNewRestaurant)

router.route('/:id')
	.get(getSingleRestaurant)

module.exports = router