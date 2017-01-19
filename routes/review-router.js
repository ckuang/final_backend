const reviewRouter = require('express').Router();
const Review = require('../models').Review;

const makeReview = (req, res) => {
	Review.create(req.body)
	.then((review) => {
		res.send(review)
	})
	.catch((err) => {
		console.log('ERROR MAKING A REVIEW!!!======>', err)
		res.sendStatus(500)
	})
};

//Present URL is "/api/review"
reviewRouter.route('/')
	.post(makeReview)

module.exports = reviewRouter;