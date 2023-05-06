var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var providerRouter = require('./routes/providers');
var apiRouter = require('./api/routes/main.routes')


// TODO login
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const User = require('./db/userSchema');
const bodyParser = require('body-parser');

var app = express();
app.use(cors({'origin': 'http://localhost:4200'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/providers', providerRouter);
app.use('/api', apiRouter)
app.use('/*', indexRouter)

// Login Strategy named 'local'
passport.use('local', new localStrategy(function (username, password, done) {
  // Find user by username
  User.findOne({ username: username }, function (err, user) {
      if (err) return done('Error during searching', null);
      if (!user) return done('There is no such user in db', null);
      // Check password
      user.comparePasswords(password, function (error, isMatch) {
          if (error) return done(error, false); // if comparing failed
          if (!isMatch) return done('Password is not correct', false); 
          return done(null, user);
      })
  })
}));

// Saving UserID to the session after login
passport.serializeUser(function (user, done) {
  if (!user) return done('There is no user that can be logged in. Give one before logging in', null);
  return done(null, user);
});

// Removing UserID after logout
passport.deserializeUser(function (user, done) {
  if (!user) return done("There is no user that can be logged out", null);
  return done(null, user);
});

// Middleware chain
app.use(expressSession({ secret: 'prf2021lassananodejsvegereerunk', resave: true }));
app.use(passport.initialize());
app.use(passport.session());


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
