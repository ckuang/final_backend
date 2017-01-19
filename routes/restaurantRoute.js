const router = require('express').Router();
const models = require('../models');


console.log('restaurant route');

const getRestaurant = (req, res)=>{
    models.Restaurant.find({
            where:{
                id:req.params.id
            },
            include:[
                {model: models.Review}]
        }
    )
        .then(restaurant=> res.send(restaurant))

};

const getAllRestaurants = (req, res)=>{
    models.Restaurant.findAll()
        .then(restaurants=> {
            console.log('restaurants',restaurants);
            res.send(restaurants)});
};

const createRestaurant = (req, res)=>{
    models.Restaurant.create({
        name: req.body.name,
        neighborhood: req.body.neighborhood,
        cuisine: req.body.cuisine,
        address: req.body.address,
        cost: req.body.cost
    })
        .then(restaurant=>{
                res.send(restaurant)
            }
        )
};

router.route('/')
    .get(getAllRestaurants)
    .post(createRestaurant);

router.route('/:id')
    .get(getRestaurant);

module.exports = router;