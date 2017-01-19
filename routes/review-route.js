const express = require('express');
const router = express.Router();

const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;


function getAllReviews(req, res) {
  Review.findAll()
  .then((data) => {
    console.log('All Reviews have been GOTTEN')
    res.send(data)
  })
  .catch((error) => {
    res.send(error)
  })
}

function getReviewsByRestaurant(req, res) {
  Review.findAll({
      where: {
        RestaurantId: parseInt(req.params.id)
      },
      include: [Restaurant]
    })
    .then((data) => {
      console.log('All Reviews BY RESTAURANT ID have been GOTTEN')
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    })
};



router.route('/')
  .get(getAllReviews)

router.route('/:RestaurantId')
  .get(getReviewsByRestaurant)


  module.exports = router;
