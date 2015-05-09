var http = require('http');
var url = require('url');
var queryString = require('querystring');
var mysql = require('mysql');
var facebook = require('facebook-sdk');
var FB = new facebook.Facebook({
  appId     :   '465186800311796',
  xfbml     :   true,
  version   :   'v2.3',
  secret    :   'f765517b760a787f24d9d2c569ff020a'
});