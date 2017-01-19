const router = require('express').Router();
const Restaurant = require('../models').restaurant;
const Review = require('../models').review;

const getRestaurants = (req, res) => {
  Restaurant.findAll()
  .then((restaurants) => {
    res.send(restaurants)
  })
}

const createRestaurant = (req, res) => {
  Restaurant.create(req.body)
  .then((restaurant) => {
    res.send(restaurant)
  })
}

const getOneRestaurant = (req, res) => {
  Restaurant.findById(req.params.id, {include: [Review]})
  .then((restaurant) => {
    res.send(restaurant);
  })
}

router.route('/')
  .get(getRestaurants)
  .post(createRestaurant)

router.route('/:id')
  .get(getOneRestaurant)

module.exports = router;
