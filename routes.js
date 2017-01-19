const router = require('express').Router();
const models = require('./models/index');



function postNewReview(req, res) {
  models.Review.create({
    rating: req.body.rating,
    date: req.body.date,
    description: req.body.description
  })
  .then(function(review) {
    res.send(review);
  })
}

function getAllRestaurants(req, res) {
  models.Restaurant.findAll()
  .then(function(restaurants) {
    // console.log(restaurants)
    res.send(restaurants);
  })
}

function postNewRestaurant(req, res) {
  models.Restaurant.create({
    name: req.body.name,
    neighborhood: req.body.neighborhood,
    address: req.body.address,
    cuisine: req.body.cuisine,
    cost: req.body.cost
  })
  .then(function(restaurant) {
    res.send(restaurant)
  })
}

function getOneRestaurantWithReviews(req, res) {
  models.Restaurant.findOne({
    where: {
      id: req.params.id
    },
    include: [models.Review]
  })
  .then(function(restaurant) {
    res.send(restaurant)
  })
}

// RESTAURANTS ROUTES
router.route('/restaurants')
  .get(getAllRestaurants)
  .post(postNewRestaurant)

router.route('/restaurants/:id')
  .get(getOneRestaurantWithReviews)

// REVIEW ROUTES
router.route('/review')
  .post(postNewReview)

module.exports = router;