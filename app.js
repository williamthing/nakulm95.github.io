var http = require('http');
var url = require('url');
var queryString = require('querystring');
var mysql = require('mysql');
var facebook = require('facebook-sdk');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

var connection = mysql.createConnection({
  host : 'onehackawaydb.cnbjx1hwuchp.us-west-2.rds.amazonaws.com:3306',
  db   : 'ohadb',
  user : 'one_hack_Master',
  password : 'One_HACK_master!69'
});

var FB = new facebook.Facebook({
  appId     :   '465186800311796',
  xfbml     :   true,
  version   :   'v2.3',
  secret    :   'f765517b760a787f24d9d2c569ff020a'
});

var serve = serveStatic('.', {});
var port = process.env.PORT || 8081;

function dbQuery(query_string, callback) {
  connection.connect();
  
  connection.connect(query_string, function(err, rows, fields) {
    if (err) throw err;
    
    console.log('the solution is: ' + rows[0].solution);
    callback(rows);
  });
}

// TODO: Test thoroughly
function dbInsert(insert_params, table, callback) {
  var url = 'mysql://ctservice:coffeetank@coffeetank.cwa6dc6ea3hr.us-west-2.rds.amazonaws.com:3306/ctdb';
  var connection = mysql.createConnection(url);
  connection.connect();
  connection.query('INSERT INTO ' + table + 'SET ?', connection.escape(insert_params), function(err, rows, fields) {
    dbQuery('SELECT * FROM ' + table + 'WHERE id = ' + result.insertId, callback);
    //callback(err, rows, fields);
    connection.end();
  });
}

var server = http.createServer(function(req, res) {
  var _get = queryString.parse(url.parse(req.url).query);
  
 if (_get.hasOwnProperty('test')) {
    console.log(_get[query]);
    /*dbQuery(, function(result) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result));*/
    //});
  } else {
    var done = finalhandler(req, res);
    serve(req, res, done);
  }
});

server.listen(port);
console.log("Server running at http://localhost:" + port);