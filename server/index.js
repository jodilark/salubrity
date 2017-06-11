//  =================   REQUIRE MODULES
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const Auth0Strategy = require('passport-auth0')
const passport = require('passport')

//  =================   REQUIRE FILES
const productsCtrl = require('./controllers/productsCtrl')

//  =================   OTHER VARIABLES
const port = 3000

//  =================   USE MODULES
const app = express()
app.use(express.static('../public'))
// app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
// massive({
//   host: 'localhost',
//   port: 5432,
//   database: //enter db
//   , user: 'postgres',
//   password: //enter password
// }).then(function (db) {
//   app.set('db', db),
//     console.log('connected to db')
// });

//  =================   ENDPOINTS
// example: app.get('/products/:id', productsCtrl.getProductByID)
app.get('/api/products', productsCtrl.getTestProducts)

//  =================   TESTS
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})