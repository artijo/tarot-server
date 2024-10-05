const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const sixcategoriesHistorySchema = new Schema({
    date: Date,
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    prediction : {
        love: {
            single: String,
            loveCouples: String
        },
        career: String,
        finance: String,
        health: String,
        education: String,
        travelLuck: String
    }
},{timestamps:true});

module.exports = mongoose.model('SixcategoriesHistory', sixcategoriesHistorySchema);