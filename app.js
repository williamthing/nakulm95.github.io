var http = require('http');
var url = require('url');
var queryString = require('querystring');
var mysql = require('mysql');
var facebook = require('facebook-sdk');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

var FB = new facebook.Facebook({
  appId     :   '465186800311796',
  xfbml     :   true,
  version   :   'v2.3',
  secret    :   'f765517b760a787f24d9d2c569ff020a'
});

var serve = serveStatic('.', {});
var port = process.env.PORT || 8081;

var server = http.createServer(function(req, res) {
  var _get = queryString.parse(url.parse(req.url).query);
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(port);
console.log("Server running at http://localhost:" + port);