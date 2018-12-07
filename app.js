var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');

var routes = require('./routes/routes');
// var usersRouter = require('./routes/users');
var authenticateController=require('./routes/authenticate-controller');
var registerController=require('./routes/register-controller');
var connection = require('./public/javascripts/config');
//var indexVariable = require('./views/index.html');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
// app.use('/users', usersRouter);


app.get('/', function (req, res) {  
   res.sendFile( __dirname + "index.html" );  
})  

 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/register-controller', registerController.register);
app.use('/authenticate-controller', authenticateController.authenticate);
// app.post('/admin', function (req, res) {  
//    res.sendFile( __dirname + "/src/" + "admin.html" );  
// })  


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
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname));


module.exports = app;

