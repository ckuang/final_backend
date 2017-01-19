let restaurants = require('./restaurant.js')
let reviews = require('./review.js')
let Restaurant = require('../models').Restaurant
let Review = require('../models').Review

const seedyFunction = () => {
  Restaurant.create(restaurants[0])
  Restaurant.create(restaurants[1])
  Restaurant.create(restaurants[2])
  Restaurant.create(restaurants[3])
  .then( () => {
    Review.create(reviews[0])
    Review.create(reviews[1])
    Review.create(reviews[2])
    Review.create(reviews[3])
    Review.create(reviews[4])
  })
  .catch( (err) => {
    console.log(err)
  })
  //Restaurant.sync({force:true})
  // Restaurant.bulkCreate(restaurants)
  //   .then( () => {
  //     //Review.sync({force:true})
  //     Review.bulkCreate(reviews)
  //   })
  //   .catch( (err) => {
  //     console.log(err);
  //   })
  
}

module.exports = seedyFunction
