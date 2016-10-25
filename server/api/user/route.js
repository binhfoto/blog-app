var router = require('express').Router();
var controller = require('./controller.js');
var createRoutes = require('../../util/createRoutes.js');

createRoutes(router, controller);

module.exports = router;