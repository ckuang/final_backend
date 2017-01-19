const router = require('express').Router();
const Review = require('../models').review;

const createReview = (req, res) => {
  Review.create(req.body)
  .then((review) => {
    res.send(review);
  })
}

router.route('/')
  .post(createReview)

module.exports = router;
