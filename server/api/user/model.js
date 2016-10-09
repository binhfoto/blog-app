var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    } 
});

module.exports = mongoose.model('user', userSchema);