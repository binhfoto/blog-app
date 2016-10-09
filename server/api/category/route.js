var router = require('express').Router();
var logger = require('../../util/logger.js');

router.route('/')
    .get(function(req, res) {
        logger.log('Hey from category!!');
        res.send({ok: true});
});

module.exports = router;