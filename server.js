var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
var Restaurant = db.Restaurant
var Review = db.Review

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

//Get all restarants
app.get('/api/restaurants', (req, res) => {
  Restaurant.findAll()
  .then((restaurants) => {
    res.send(restaurants)
  })
})

//Retrieves single restaurant with all associated reviews
app.get('/api/restaurants/:id', (req, res) => {
  let id = req.params.id
  Restaurant.findById(id, {
    include: [{
      model: Review,
      // where: {RestaurantId: id}
    }]
  })
  .then((restaurant) => {
    res.send(restaurant)
  })
})

//Creates a new restaurant listing
app.post('/api/restaurants', (req, res) => {
  let restaurant = req.body
  console.log(restaurant)
  Restaurant.create({
    name: restaurant.name,
    neighborhood: restaurant.neighborhood,
    address: restaurant.address,
    cuisine: restaurant.cuisine,
    cost: restaurant.cost
  })
  .then((restaurant) => {
    res.send(restaurant)
  })
})

//Posts review to database
app.post('/api/review', (req, res) => {
  let review = req.body
  Review.create({
    rating: review.rating,
    date: review.date,
    description: review.description
  })
  .then((review) => {
    review.setRestaurant(review.id)
    res.send(review)
  })
})


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  app.listen(3000, () => {
    console.log('Server running on Port 3000')
  })
})

module.exports = app
