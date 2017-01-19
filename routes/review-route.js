const router = require('express').Router();
const models = require('../models')


////////////////
///FUNCTION/////
////////////////
const addReview = (req,res) => {
	models.Review.create({
		rating:req.body.rating,
		date:req.body.date,
		description:req.body.description,
		RestaurantId:req.body.RestaurantId
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

// * Review
//   - rating: integer
//   - date: date
//   - description: string

////////////////
////ROUTES//////
////////////////
router.route('/review')
	.post(addReview)
////////////////
/////EXPORTS////
////////////////
module.exports = router;