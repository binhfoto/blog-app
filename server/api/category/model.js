var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoryShema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('category', categoryShema);