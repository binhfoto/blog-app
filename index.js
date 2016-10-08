
// entry point for our server

// setup config right before anything by requiring it
var config = require('./server/config/config.js');
var server = require('./server/server.js');

// logger is a wrapper around console.log that adds color
// and logs JSON objects and can be conditionally turned off
// so you don't have to erase all calls to it
var logger = require('./server/util/logger.js');

// start server
server.listen(config.port);