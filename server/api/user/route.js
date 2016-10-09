var router = require('express').Router();
var logger = require('../../util/logger.js');

router.route('/')
    .get(function(req, res){
        logger.log('Hey from user!!');
        res.send({ok: 1});
    });

module.exports = router;