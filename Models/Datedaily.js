const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const datedailySchema = new Schema({
    date:Date,
    prediction:String
})

module.exports = mongoose.model('datedailies', datedailySchema);