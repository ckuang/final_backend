var models = require('..models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  models.Restaurant.findAll({}).then(function(restaurants){
    res.render(restaurants);
    });
  });

router.get('/restaurant/:id', function(req, res) {
  models.Restaurant.find({
    where: {
      id: req.params.id
    }
  }).then(function(restaurant) {
    res.render(restaurant)
  });
});

router.post('/restaurants', function (req, res) {
  models.Restaurant.create ({
    title: req.body.title,
    ReviewId: req.body.review_id
  }).then (function(restaurant) {
    res.render(restaurant);
  });
});

module.exports = router;
