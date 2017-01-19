const reviewRouter = require('express').Router();
const Review = require('../models').Review;

const writeReview = (req, res) => {
	Review.create(req.body)
	.then((review) => {
		res.send(review)
	})
	.catch((err) => console.log(err))
}

reviewRouter.route('/')
	.post(writeReview)

module.exports = reviewRouter;