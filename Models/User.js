const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    birthdate: Date,
    tel : String,
    role:String
});

module.exports = mongoose.model('User', userSchema);