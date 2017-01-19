var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})
//index page
app.get('/', function(req, res) {
	res.send('index.js')
})
//all restaurants
app.get('/api/restaurants', function(req, res) {
	models.Restaurants.findAll()
	.then(Restaurants => {res.send(Restaurants)})
})
//single restaurant w reviews
app.get('/api/restaurants/:id', function(req, res) {
	models.Restaurants.findById()
	.then(Restaurants => {res.send(Restaurants)})
	res.send()
})
//restaurant
app.post('/api/restaurants', function(req, res) {
	models.Restaurants.create({
		restaurants: req.params.restaurants
	}).then(newRestaurant => {
		res.send(newRestaurant)
	})
})
//reviews
app.post('/api/reviews', function(req, res) {
	models.Review.create({
		reviews: req.params.reviews
	}).then(newReview => {
		res.send(newReview)
	})
}) 

db.sequelize.sync().then(function() {
  app.listen(3000)
})

module.exports = app
