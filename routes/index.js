const router = require('express').Router();

router.use('/restaurants', require('./restaurantRoutes'));
router.use('/review', require('./reviewRoutes') );

module.exports = router;