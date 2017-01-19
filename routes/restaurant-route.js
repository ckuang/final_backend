// 'use strict'
const router = require('express').Router();

// REQUIRE MODELS
const Restaurant = require('../models').Restaurant
const Review = require('../models').Review

// GET ALL THE RESTAURANTS------------------------------------------------------
const getRestaurants = (req, res) => {
  Restaurant.findAll()

    .then((resta) => res.send(resta))

}

// GET ONE RESTRURANT WITH REVIEWS MODEL INCLUDED-------------------------------
const getOneRestaurant = (req, res) => {
    
    Restaurant.findOne({
            
            where: {
                id: req.params.id
            },

            include: 
                [{model: Review}]

    })

    .then(restau => {
        console.log('Restaurant data:', restau);
        res.send(restau)
    })

};

// POST RESTAURANT--------------------------------------------------------------
const postRestaurant = (req, res) => {

    Restaurant.create({
      name: req.body.name,
      neighborhood: req.body.neighborhood,
      cuisine: req.body.cuisine,
      address: req.body.address,
      cost: req.body.cost    
    })

    .then((resta) => {
      resta.dataValues.message = 'Restaurant successfully added!'
      res.send(resta)
    }) 

}


/////////////////////
//////ROUTE//////////
/////////////////////
router.route('/')
  .get(getRestaurants)
  .post(postRestaurant)

router.route('/:id')
  .get(getOneRestaurant)

module.exports = router