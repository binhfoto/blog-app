var router = require('express').Router();
var logger = require('../../util/logger.js');
var controller = require('./controller.js');

route.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete) ;


module.exports = router;