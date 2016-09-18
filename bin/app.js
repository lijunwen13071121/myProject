var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var my = require('./routes/my');
var my1 = require('./routes/my1');
var my2 = require('./routes/my2');
var my3 = require('./routes/my3');
var my4 = require('./routes/my4');
var my5 = require('./routes/my5');
var stu = require('./routes/stu');
var techAccount = require('./routes/techAccount');
var aside = require('./routes/aside');
var hometeach_blog = require('./routes/hometeach_blog');
var hometeach_comment = require('./routes/hometeach_comment');
var hometeach_mainpage = require('./routes/hometeach_mainpage');
var hometeach_nav = require('./routes/hometeach_nav');
var hometeach_navm = require('./routes/hometeach_navm');
var hometeach = require('./routes/hometeach');
var language_blog= require('./routes/language_blog');
var language_comment = require('./routes/language_comment');
var language_mainpage = require('./routes/language_mainpage');
var language_nav = require('./routes/language_nav');
var language_navm = require('./routes/language_navm');
var language = require('./routes/language');
var mainpage = require('./routes/mainpage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/my', my);
app.use('/my1', my1);
app.use('/my2', my2);
app.use('/my3', my3);
app.use('/my4', my4);
app.use('/my5', my5);
app.use('/stu', stu);
app.use('/techAccount', techAccount);
app.use('/aside', aside);
app.use('/hometeach_blog', hometeach_blog);
app.use('/hometeach_comment', hometeach_comment);
app.use('/hometeach_mainpage', hometeach_mainpage);
app.use('/hometeach_nav', hometeach_nav);
app.use('/hometeach_navm', hometeach_navm);
app.use('/hometeach', hometeach);
app.use('/language_blog', language_blog);
app.use('/language_comment', language_comment);
app.use('/language_mainpage', language_mainpage);
app.use('/language_nav', language_nav);
app.use('/language_navm', language_navm);
app.use('/language', language);
app.use('/mainpage', mainpage);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
