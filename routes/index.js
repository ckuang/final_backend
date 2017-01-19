const router = require('express').Router();
const db = require('../models')
const Restaurant = db.Restaurant;
const Review = db.Review;
const debug = require('debug')('ROUTER')


const getAllRestaurant = (req, res) => {
  Restaurant.findAll()
  .then(restaurants =>  {
    debug(restaurants)
    res.send(restaurants)
  })
}

const createRestaurant = (req, res) => {
  Restaurant.create(req.body)
  .then(restaurant =>  {
    debug(restaurant)
    res.send(restaurant)
  })
}

const createReview = (req, res) => {
  Review.create(req.body)
  .then(review => res.send(review))
}

const getOneRestaurant = (req, res) => {
  Restaurant.findById(req.params.id, {include: Review})
  .then(restaurant => res.send(restaurant))
}



router.route('/restaurants')
  .get(getAllRestaurant)
  .post(createRestaurant)

router.route('/restaurants/:id')
  .get(getOneRestaurant)

router.route('/review')
  .post(createReview)


module.exports = router