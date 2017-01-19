// 'use strict'
const router = require('express').Router();

// REQUIRE MODELS
const Review = require('../models').Review

// POST REVIEW---------------------------------------------------------------
const postReview = (req, res)=>{
    
    Review.create({
        rating: req.body.rating,
        date: req.body.date,
        description: req.body.description
    })

    .then (rev => {
        console.log('review', rev.dataValues);
        rev.dataValues.rev = {
            rating: rev.dataValues.rating,
            date: rev.dataValues.date,
            description: rev.dataValues.description
        };

        rev.dataValues['message']= 'Review successfully added!';
        console.log('Review after', rev.dataValues);

        res.send(rev)
    })
};


/////////////////////
//////ROUTE//////////
/////////////////////

router.route('/')
  .post(postReview)

/////////////////////
/////EXPORTS////////
/////////////////////
module.exports = router;