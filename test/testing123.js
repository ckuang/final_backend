process.env.NODE_ENV = 'test';

let models = require('../models')
let Restaurant = models.Restaurant;
let Review = models.Review;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

let restaurants = require('../seed/restaurant.js')
let reviews = require('../seed/review.js')
let seedFunction = require('../seed/index')

chai.use(chaiHttp);
//Our parent block
describe('Yalp', () => {
    beforeEach((done) => { //Before each test we empty the database
      models.sequelize.sync({force: true}).then(()=> {
          seedFunction();
        done();
      })
    });
/*
  * Test the /GET route
  */
  describe('/GET restaurants route', () => {
      it('server should have a /api/restaurants GET route', (done) => {
        chai.request(server)
            .get('/api/restaurants')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('/GET restaurants functionality', () => {
      it('route should GET all the restaurants', (done) => {
        chai.request(server)
            .get('/api/restaurants')
            .end((err, res) => {
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
              done();
            });
      });
  });

  describe('/POST restaurant route', () => {
      it('server should have a /api/restaurants POST route', (done) => {
        let restaurant = restaurants[1]
        chai.request(server)
            .post('/api/restaurants')
            .send(restaurant)
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('/POST restaurant functionality', () => {
      it('route should POST a restaurant', (done) => {
        let restaurant = restaurants[1];
        chai.request(server)
            .post('/api/restaurants')
            .send(restaurant)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('neighborhood');
                res.body.should.have.property('cuisine');
                res.body.should.have.property('address');
                res.body.should.have.property('cost');
              done();
            });
      });
  });

  describe('/POST review route', () => {
      it('server should have a /api/review/ route', (done) => {
        // let review = reviews[0]
          let review = {
              rating: 5,
              description: "The lunch special is amazing! V authentic.",
              date: "2017-01-12",
              RestaurantId: 1
          };
        chai.request(server)
            .post('/api/review')
            .send(review)
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('/POST review functionality', () => {
      it('route should POST a review ', (done) => {
        // let review = reviews[0];
          let review = {
              rating: 5,
              description: "The lunch special is amazing! V authentic.",
              date: "2017-01-12",
              RestaurantId: 1
          };
        chai.request(server)
            .post('/api/review')
            .send(review)
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('rating');
                res.body.should.have.property('description');
                res.body.should.have.property('date');
              done();
            });
      });
  });


  describe('/GET restaurants route', () => {
      it('server should have a /api/restaurants/:id GET route', (done) => {
        chai.request(server)
            .get('/api/restaurants/1')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  describe('/GET restaurants functionality', () => {
      it('route should GET a single restaurant along with all its reviews', (done) => {
        chai.request(server)
            .get('/api/restaurants/1')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('neighborhood');
                res.body.should.have.property('cuisine');
                res.body.should.have.property('address');
                res.body.should.have.property('cost');
                res.body.Reviews.should.be.a('array');
                res.body.Reviews.length.should.be.eql(2);
              done();
            });
      });
  });

});
