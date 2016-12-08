
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , ejs = require('ejs');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 1004);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.engine('.html', ejs.__express);
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//页面刷新重定向(Angular use html5)
app.use(function (req, res) {
  if(req.path.indexOf('/api')>=0){
    res.send("server text");
  }else{ 
    res.sendfile('public/index.html');
  }
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
