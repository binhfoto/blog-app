var express = require('express');
var app = express();

// api router
var api = require('./api');

// setup the global middleware 
var globalMiddleware = require('./middleware/applicationMiddleware.js');
globalMiddleware(app);

// setup the api
app.use('/api', api);

// error handler
app.use(function(req, res, next, err){
    logger.log(err);
    res.status(err.status || 500).send(err.message);
});

//export the app
module.exports = app;