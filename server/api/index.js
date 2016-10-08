// create api router
var router = require('express').Router();

// api router will mount other routers for all our resources
// Each resource directory has a resourceRoute.js file with the router ready to go

// require them and mount them to their respective routes below
// by default, 'require' function will get the index.js file
router.use('/users', require('./user'));
router.use('/categories', require('./category'));
router.use('/posts', require('./post'))

module.exports = router;