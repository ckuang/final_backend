var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
var indexRoute = require('./routes').routes

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.use('/api', indexRoute.Restaurant)
app.use('/api', indexRoute.Review)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './front/index.html'))
})

db.sequelize.sync().then(function() {
  app.listen(3000)
})

module.exports = app
