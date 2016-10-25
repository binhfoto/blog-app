module.exports = function(router, controller) {
    // setup boilerplate route just to satisfy a request
    router.param('id', controller.params);

    router.route('/')
        .get(controller.get)
        .post(controller.post);

    router.route('/:id')
        .get(controller.getOne)
        .put(controller.put)
        .delete(controller.delete) ;
};