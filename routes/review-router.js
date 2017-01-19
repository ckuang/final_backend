//MODULES & IMPORTS
const express = require('express')
const router = express.Router()
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review

//FUNCTIONS
function createReview (request, response) {
	Review.create({
		rating: request.body.rating,
		date: request.body.date,
		description: request.body.description,
		RestaurantId: request.params.id
	})
		.then((data) => {
			response.send(data)
		})
		.catch((error) => {
			response.send(error)
		})
}

//ROUTES
router.route('/:id')
	.post(createReview)

//EXPORT
module.exports = router