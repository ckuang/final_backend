//the first that is required is the index.js

const router = require('express').Router();


router.use('/restaurants', require('./restaurant-route'));
router.use('/review', require('./review-route'));

module.exports = router;