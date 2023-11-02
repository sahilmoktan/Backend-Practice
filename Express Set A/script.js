const express = require('express')
const app = express()

// app.use(function(req, res, next){   //middleware part
//   console.log('middleware ')
//   next()
// })


// app.get('/profile/:username', function (req, res) {   // dynamic routing, route parameters
//   res.send(`Hello form ${req.params.username}`)
// })

app.set('view engine', 'ejs')       // using tamplet engine:ejs
app.use(express.static('./public')) // using static page

app.get('/', function (req, res) {
  let b = 1
  if (b){
    res.render('index')             // rendering insted of send
  }else{
    throw Error ('thaa xaina')
  }
})


app.get('/error', function (req, res) {
  throw Error( 'Hoit errror ayo hai')
})


app.use(
  function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    // res.status(500)
    res.render('error', { error: err })
  }
)

app.listen(3000)