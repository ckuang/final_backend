var router = require('express').Router();
const models = require('../models')
const Restaurant = require('../models').Restaurant;
const Review = require('../models').Review



const getAllResturants = (req,res)=>{
  Restaurant.findAll()
     .then(data =>{
      res.send(data);
    })
 }

const addRestaurant = (req,res)=>{
  Restaurant.create(req.body)
    .then(data=>{
      res.send(data);
     })
}

const getResturantById = (req,res)=>{
  Restaurant.findById(req.params.id, 
    {include: 
      [Review]})
     .then(data =>{
       res.send(data);
     })
     .catch(err=>{
       console.log(err);
     })
 }

/************************/
//For reviews 
// rating
// date
// description 

/************************/



const addReview = (req,res) => {
	models.Review.create({
		rating:req.body.rating,
		date:req.body.date,
		description:req.body.description
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}




router.route('/restaurants')
	.get(getAllResturants)
	.post(addRestaurant)

router.route('/restaurants/:id')
	.get(getResturantById)

router.route('/review')
	.post(addReview)


module.exports = router;






