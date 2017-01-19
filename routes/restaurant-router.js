//MODULES & IMPORTS
const express = require('express')
const router = express.Router()
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review

//FUNCTIONS
function getSpecificRestaurantWithReviews (request, response) {
	Restaurant.findOne({
		where: {
			id: request.params.id
		},
		include: [{
			model: Review
		}]
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
	.get(getSpecificRestaurantWithReviews)

//EXPORT
module.exports = router