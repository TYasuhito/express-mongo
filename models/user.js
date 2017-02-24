// /models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    abctalking_id : { type: String, required: true, unique: true },
    name: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);