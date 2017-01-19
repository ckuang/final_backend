const router = require('express').Router();
const express = require('express');

const Restaurant = require('../models/restaurant-model').Restaurant ;
const Review = require('../models/review-model').Review;


const allRestaurants = (req,res)=>{
	Restaurant.findAll({include:[Review]})
	.then((data)=>{
		// console.log('Here is all of the resturants!');
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singleRestaurant = (req,res)=>{
	Restaurant.findById(req.params.id)
	.then((data)=>{
		// console.log('Here is this resturant with their review');
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


const createRestaurant = (req,res)=>{
	Restaurant.create({
		name:req.body.name, 
		neighborhood:req.body.neighborhood, 
		address:req.body.address, 
		cuisine:req.body.cuisine,
		cost:req.body.cost
	})
	.then((data)=>{
		console.log('You just created a new resturant!');
		res.sendStatus(200)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


const createReview = (req,res)=>{
	Review.create({date:req.body.date, rating:req.body.rating}, {where:{id:req.params.id}})
	.then((data)=>{
		// console.log('You made a review! ');
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}



router.route('/api/restaurants')
	.get(allRestaurants)
	.post(createRestaurant)

router.route('/api/restaurant/:id')
	.get(singleRestaurant)
	
router.route('/api/review/:id')
	.post(createReview)

module.exports = router;