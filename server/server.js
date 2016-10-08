var express = require('express');
var app = express();

// api router
var api = require('./api');

// setup the global middleware 
var globalMiddleware = require('./middleware/applicationMiddleware.js');
globalMiddleware(app);

// setup the api
app.use('/api', api);

//export the app
module.exports = app;