var express = require('express');
var app = express()
var bodyparser = require('body-parser');
var path = require('path')
var db = require('./models');

var router = require('./routes');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('views/public'));

app.use('/api', router);


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  app.listen(4000,()=>console.log('listening on port 4000'))
})

module.exports = app;
