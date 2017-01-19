const router = require('express').Router();
const models = require('../models')


////////////////
///FUNCTION/////
////////////////
const getRestaurant = (req,res) => {
	models.Restaurant.findAll()
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

const addRestaurant = (req,res) => {
	models.Restaurant.create({
		name:req.body.name,
		neighborhood:req.body.neighborhood,
		address:req.body.address,
		cuisine:req.body.cuisine,
		cost:req.body.cost
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

// * Restaurant
//   - name: string
//   - neighborhood: string
//   - address: string
//   - cuisine: string
//   - cost: integer

const getOneRestaurant = (req,res) => {
	models.Restaurant.findOne({
		where:{
			id:req.params.id
		}, 
			include:[models.Review]
		
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}
////////////////
////ROUTES//////
////////////////
router.route('/restaurants')
	.get(getRestaurant)
	.post(addRestaurant)

router.route('/restaurants/:id')
	.get(getOneRestaurant)
////////////////
/////EXPORTS////
////////////////
module.exports = router;
// * GET - all restaurants
// * GET - single restaurant w/ reviews
// * POST - restaurant