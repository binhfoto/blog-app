var _ = require('lodash');
var Post = require('./model.js');

var controller = {};

controller.params = function(req, res, next, id) {
    Post
        .findById(id)
        .populate('author categories')
        .exec()
        .then(
            function(post){
                if(!post){
                    next(new Error('No post with id ' + id));
                }else{
                    req.post = post;
                    next();
                }
            },
            function(err){
                next(err);
            }
        );
    /*Post
        .findById(id)
        .exec(function(err, post){
            if(err){
                next(err);
            }
            else{
                req.post = post;
                next();
            }
        })
        .then(
            function(post){
                if(!post){
                    next(new Error('No post with id ' + id));
                }else{
                    req.post = post;
                    next();
                }
            },
            function(err){
                next(err);
            }
        );*/
};

controller.get = function(req, res, next){
    Post
        .find({})
        .populate('author categories')
        .exec()
        .then(
            function(posts){
                res.json(posts);
            },
            function(err){
                next(err);
            }
        );
};

controller.getOne = function(req, res, next){
    var post = req.post;
    res.json(post);
};

controller.post = function(req, res, next){
    var user = req.user;
    var post = req.body;
    post.author = user._id;
    Post
        .create(post)
        .then(
            function(post){
                res.json(post);
            },
            function(err){
                next(err);
            }
        );
};

controller.put = function(req, res, next){
    var curPost = req.post;
    var newPost = req.body;

    _.merge(curPost, newPost);

    curPost.save(function(err, post){
        if(err){
            next(err);
        }else{
            res.json(post);
        }
    }); 
};

controller.delete = function(req, res, next){
    var post = req.post;
    post.remove(function(err, post){
        if(err){
            next(err);
        }else{
            res.json(post);
        }
    });
}

module.exports = controller;