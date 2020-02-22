const express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var MySQLStore = require('express-mysql-session')(session);

var flash = require('connect-flash');

app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function (request, response, next) {
  fs.readdir('./data', function (err, filelist) {
    request.list = filelist;
    next();
  });
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store:new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dkuce1320!',
    database: 'o2'
  })
}));

app.use(flash());
app.get('/flash', function(req, res){
  req.flash('info', 'Flash is back');
  res.send('flash');
});

app.get('/flash-display', function(req, res){
  var fmsg = req.flash();
  console.log(fmsg);
  res.send(fmsg);
})


var passport = require('./lib/passport')(app);

var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth')(passport);
var indexRouter = require('./routes/index');



app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Example app'));
