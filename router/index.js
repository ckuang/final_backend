const router = require('express').Router();

router.use('/restaurants', require('./restaurantRoutes.js'));
router.use('/review', require('./reviewRoutes.js'));

module.exports = router; 