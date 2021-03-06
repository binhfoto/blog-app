var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    categories:[{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }]
});

module.exports = mongoose.model('post', postSchema);