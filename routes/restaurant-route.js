const express = require('express');
const router = express.Router();

const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

function getAllRestaurants(req, res) {
  Restaurant.findAll()
    .then((data) => {
      console.log('All Restaurants have been GOTTEN')
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    })
};

function getOneRestaurant(req,res) {
  Restaurant.findAll({
    where:{
      id: parseInt(req.params.id)
    },
    incude: [Review]
  })
  .then((data) => {
    console.log('One Restaurant has been GOTTEN')
    res.send(data)
  })
  .catch((error) => {
    res.send(error)
  })
}

function createNewRestaurant(req,res) {
    Restaurant.create({
        name: req.body.name,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        cuisine: req.body.cuisine,
        cost: req.body.cost
    })
    .then((data) => {
      console.log('One Restaurant has been CRE-OTTEN')
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    })
}

function createReview(req,res) {
  Review.create({
      rating: parseInt(req.body.rating),
      date: req.body.date,
      description: req.body.description,
      RestaurantId: parseInt(req.params.id)
    })
  .then((data) => {
    console.log('One Restaurant Review has been CRE-OTTEN')
    res.send(data)
  })
  .catch((error) => {
    res.send(error)
  })
}

// function getReviewsByID(req, res) {
//   Restaurant.findAll({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then((data) => {
//       console.log('All Reviews BY RESTAURANT ID have been GOTTEN')
//       res.send(data)
//     })
//     .catch((error) => {
//       res.send(error)
//     })
// };

router.route('/')
  .get(getAllRestaurants)
  .post(createNewRestaurant)


router.route('/:id')
  .get(getOneRestaurant)
  .post(createReview)

// router.route('/:id')
//   .get(getReviewsByID)

  module.exports = router;
