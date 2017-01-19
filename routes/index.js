const router = require('express').Router();

//Present URL is "/api"
router.use('/restaurants', require('./restaurant-router'));
router.use('/review', require('./review-router'));

module.exports = router;