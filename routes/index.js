var router = require('express').Router();

console.log('routes folder');
router.use('/restaurants', require('./restaurantRoute'));
router.use('/review', require('./reviewRoute'));

module.exports = router;