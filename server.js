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

