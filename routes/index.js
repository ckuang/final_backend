const router = require('express').Router();
const models = require('../models')
const Restaurant = models.Restaurant
const Review = models.Review

const getAllResturants = (req,res)=>{
  Restaurant.findAll()
    .then(data=>{
      res.send(data);
    })
}

const makeNewResturant = (req,res)=>{
  Restaurant.create(req.body)
    .then(data=>{
      res.send(data);
    })
}

const getResturantById = (req,res)=>{
  Restaurant.findById(req.params.id, {include: [Review]})
    .then(data =>{
      res.send(data);
    })
    .catch(err=>{
      console.log(err);
    })
}

const makeNewReview = (req,res)=>{
  Review.create(req.body)
    .then(data=>{
    res.send(data);
  })
}

router.route('/restaurants')
  .get(getAllResturants)
  .post(makeNewResturant)

router.route('/restaurants/:id')
  .get(getResturantById)

router.route('/review')
  .post(makeNewReview)

module.exports = router;