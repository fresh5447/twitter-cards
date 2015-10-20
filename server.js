require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var Twit = require('twit');
var axios = require('axios');
var _ = require('lodash');


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options("*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});

var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var fetchTweets = function(req, res){
  var twitterHandle = req.params.twitterHandle;

  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 10 }, function(err, data, response) {
    res.send(data);
  });

};

var fetchKeyword = function(req,res){
  var keyword = req.params.keyword;
  
  T.get('search/tweets', { q: keyword +' since:2011-11-11', count: 10 }, function(err, data, response) {
    res.send(data)
  });

};

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/handle/:twitterHandle', fetchTweets);
app.use('/api/word/:keyword', fetchKeyword);

app.get('/', function(req, res){
	res.sendFile('index.html');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
	console.log('Express server listening on port ' + server.address().port)
});
