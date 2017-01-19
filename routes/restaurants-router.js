//MODULES & IMPORTS
const express = require('express')
const router = express.Router()
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review

//FUNCTIONS
function getAllRestaurants (request, response) {
	Restaurant.findAll()
		.then((data) => {
			response.send(data)
		})
		.catch((error) => {
			response.send(error)
		})
}

function createNewRestaurant (request, response) {
	Restaurant.create({
		name: request.body.name,
		neighborhood: request.body.neighborhood,
		address: request.body.address,
		cuisine: request.body.cuisine,
		cost: request.body.cost
	})
		.then((data) => {
			response.send(data)
		})
		.catch((error) => {
			response.send(error)
		})
}

//ROUTES
router.route('/')
	.get(getAllRestaurants)
	.post(createNewRestaurant)

//EXPORT
module.exports = router