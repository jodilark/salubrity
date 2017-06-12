//  =================   REQUIRE MODULES
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const Auth0Strategy = require('passport-auth0')
const passport = require('passport')
const config = require('./.config')

//  =================   REQUIRE FILES
const productsCtrl = require('./controllers/productsCtrl')

//  =================   OTHER VARIABLES
const port = 3000

//  =================   MIDDLEWARE
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

// ...session setups
app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: config.secret
}))

// ...passport setups
app.use(passport.initialize())
app.use(passport.session())

// ...make the strategy (still part of passport setups)
var strategy = new Auth0Strategy({
  domain: config.domain,
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
});

// ================ INVOKE PASSPORT METHODS
// ...pass in the stategy
passport.use(strategy);

// ...serialize user data
passport.serializeUser(function(user, done) {
  done(null, user);
});

// ...deserialize user data
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//  ================= ENDPOINTS
app.get('/api/products', productsCtrl.getTestProducts)

// ...authorization endpoints
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: '/#!/hcp_home', failureRedirect: '/login'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})

//  =================   TESTS
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})