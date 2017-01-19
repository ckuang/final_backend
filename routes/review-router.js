var models = require('..models');
var express = require('express');
var router = express.Router();

router.post('/reviews', function (req, res) {
  models.Review.create ({
    title: req.body.title,
    RestaurantId: req.body.restaurant_id
  }).then (function(review) {
    res.render(review);
  });
});

module.exports = router;
