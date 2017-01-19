const router = require("express").Router();
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

const getAllReviews = (req,res) => {
	Review.findAll({
	})
	.then((reviews) =>{
		res.send(reviews)}
	)
};

const postNewReview = (req,res)=>{
	Review.create({
		rating: req.body.rating,
    	date: Date(),
    	description: req.body.description,
    	address: req.body.address
	}).then((review) =>{
		// review.dataValues['address'] = req.body.address
		console.log('New review posted!')
		res.send(review)}
	)
}

router.route('/')
	.get(getAllReviews)
	.post(postNewReview)

// router.route('/:id')
// 	.post(postNewReview)

module.exports = router