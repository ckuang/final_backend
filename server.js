var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
var router = require('./routes')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '/views/public')))

app.use("/api", router) //any with api will go to router

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  app.listen(3000)
})
.then(()=>console.log('listen in port 3000'))

module.exports = app





// var express = require('express')
// var app = express()
// var bodyparser = require('body-parser')
// var path = require('path')
// var db = require('./models')
// var router = require('./routes')

// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json())
// // app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '/views/public')))

// app.use("/api", router) //any with api will go to router

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })

// db.sequelize.sync().then(function() {
//   app.listen(3000)
// })
// .then(()=>console.log('listen in port 3000'))
// module.exports = app









// var express = require('express')
// var app = express()
// var bodyparser = require('body-parser')
// var path = require('path')
// var db = require('./models')

// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json())
// app.use(express.static('public'))




// // POST - review
// app.post('/api/reviews',(req,res)=>{
// 	db.Review.create(
// 		{ rating: req.body.rating,
// 		  date: req.body.date,
// 		  RestaurantId: req.body.RestaurantId,
// 		  description: req.body.description    
// 	})
// 	.then((data)=>res.send(data))
// 	.catch((err)=>res.send(err.message))
// })


// // GET - default index.html page
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/views/index.html'))
// })



// // app.use(apiRouter)
// db.sequelize.sync().then(function() {
//   app.listen(3000, ()=>console.log('YAY...!! Listening to port 3000'))
// })


