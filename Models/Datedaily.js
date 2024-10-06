const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datedailySchema = new Schema({
    datename:String,
    date:Date,
    prediction:{
        love: {
            single: String,
            loveCouples: String
        },
        career: String,
        finance: String,
        health: String,
        education: String,
        travelLuck: String
    },

},{timestamps:true})

module.exports = mongoose.model('datedailies', datedailySchema);