const revRouter = require('express').Router();

//Models
const Review = require('../models').Review;

const createNewReview = (req, res) => {
	Review.create(req.body)
		.then( (newReview) => {
			res.send(newReview);
		})
		.catch( (err) => {
			console.log(err);
			res.sendStatus(500);
		});
};


revRouter.route('/')
	.post(createNewReview);

module.exports = revRouter;