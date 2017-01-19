const router = require('express').Router();

//REQUIRE MODELS
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

//FUNCTIONS
const createReview = (req,res) => (
	Review.create({
	  rating: req.body.rating,
	  date: req.body.date,
	  RestaurantId: req.body.RestaurantId,
	  description: req.body.description
	})
	.then((data)=>res.send(data))
	.catch((err)=>res.send(err.message))
	
)

/////===============================
// POST - review
// app.post('/api/reviews',(req,res)=>{
// 	db.Review.create(
// 		{ rating: req.body.rating,
// 		  date: req.body.date,
// 		  RestaurantId: req.body.RestaurantId,
// 		  description: req.body.description    
// 	})
// 	.then((data)=>res.send(data))
// 	.catch((err)=>res.send(err.message))
// })


// // GET - default index.html page
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })
/////===============================



//ROUTES
router.route('/')
	.post(createReview)

//EXPORT
module.exports = router;

