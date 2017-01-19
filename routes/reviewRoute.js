const router = require('express').Router();
const models = require('../models');


console.log('review route');

const getReview = (req, res)=>{
    models.Review.findOne({
            where:{
                id:req.params.id
            }}
    )
        .then(review=>
        {
            console.log(review);
            res.send(review)
        })

};

const getAllReviews = (req, res)=>{
    models.Review.findAll()
        .then(reviews=> {
            console.log('reviews',reviews);
            res.send(reviews)});
};

const createReview = (req, res)=>{
    models.Review.create({
        rating: req.body.rating,
        description: req.body.description,
        date: req.body.date,
        RestaurantId: req.body.RestaurantId
    })
        .then(review=>{
                console.log('create review data', review.dataValues);
                res.send(review)
            }
        )
};


router.route('/')
    .get(getAllReviews)
    .post(createReview);

router.route('/:id')
    .get(getReview);

module.exports = router;