var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.use('/api', require('./router/all-routes'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(function() {
	console.log('Listening on 3000.')
	app.listen(3000)
})

module.exports = app
