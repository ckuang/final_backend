const router = require('express').Router();

router.use('/restaurants', require('./routes'));

module.exports = router;