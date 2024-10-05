const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datedailySchema = new Schema({
    datename:String,
    date:Date,
    prediction:String,

})

module.exports = mongoose.model('datedailies', datedailySchema);