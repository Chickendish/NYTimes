//===========================================
// Dependencies
//===========================================

const express = require('express');
const bodyParser = require('body-parser');
//const logger = require('morgan');
const mongoose = require('mongoose');

//===========================================
// Instantiate server
//===========================================

const app = express();
PORT = process.env.PORT || 3600;

//===========================================
// Run morgan for logging
//===========================================

//app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// ==========================================
//  Routing
// ==========================================

app.get("/", function(req, res){
	res.sendFile('./public/index.html');
});

app.get('/api/saved', function(req, res) {

  Article.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
});

app.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);

  var title = req.body.title;
  var date = req.body.date;
  var url = req.body.url;

  newArticle.save(function(err, doc){
    if(err){
      console.log(err);
    } else {
      res.send(doc._id);
    }
  });
});

app.delete('/api/saved/', function(req, res){

  var url = req.param('url');

  Article.find({"url": url}).remove().exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});


// ===========================================
//  Set up the database
// ===========================================

var link = "mongodb://localhost/nytreact";

mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});
// ===========================================
// Listen on server
// ===========================================

app.listen(PORT, ()=>
	console.log("App listening on port: " + PORT));

