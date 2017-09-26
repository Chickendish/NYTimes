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

//===========================================
// Listen on server
//===========================================

app.listen(PORT, ()=>
	console.log("App listening on port: " + PORT));

