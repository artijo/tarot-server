const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    name: String,
    tel : String,
    role: {
        type: String,
        default: 'user'
    },
});

module.exports = mongoose.model('User', userSchema);