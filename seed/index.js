let restaurants = require('./restaurant.js')
let reviews = require('./review.js')
// let models=  require('../models');
// let Review = require('../models').Review
//
// export function seedRestaurant (){
//   models.Restaurant.create(restaurants[0])
//   models.Restaurant.create(restaurants[1])
//   models.Restaurant.create(restaurants[2])
//   models.Restaurant.create(restaurants[3])
//
// }
// export function seedReview(){
//     models.Review.create(reviews[0])
//     models.Review.create(reviews[1])
//     models.Review.create(reviews[2])
//     models.Review.create(reviews[3])
//     models.Review.create(reviews[4])
// }
// // module.exports = {restaurant: seedRestaurant, review: seedReview} ;


const models = require('./../models');
const seedFunction = () => {

    models.Restaurant.bulkCreate(restaurants)
        // .catch((err) => console.log(err));

    models.Review.bulkCreate(reviews)
        // .catch((err) => console.log(err));
}

module.exports = seedFunction;