const router = require('express').Router();

//REQUIRE MODELS
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review;

//FUNCTIONS
const getAllRestaurant = (req,res) => (
    Restaurant.findAll()
    .then((data)=>res.send(data))
)


// GET - single restaurant w/ reviews
const getOneRestaurant = (req,res) => (
    Restaurant.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {model: Review}
        ]
    })
        .then((data)=>res.send(data))
)




// POST - restaurant
const createARestaurant = (req,res) => (
    Restaurant.create({
      name: req.body.name,
	  neighborhood: req.body.neighborhood,
	  address: req.body.address,
	  cuisine: req.body.cuisine,
	  cost: req.body.cost
    })
      .then((data)=>res.send(data))
	  .catch((err)=>res.send(err.message))
    )

//ROUTES
router.route('/')
    .get(getAllRestaurant)
    .post(createARestaurant)

router.route('/:id')
    .get(getOneRestaurant)

//EXPORT
module.exports = router;