const mongoose = require('mongoose');
const User = require('./User');
const { Modal } = require('bootstrap');
const Schema = mongoose.Schema;

const datedaily = new Schema({
    date:Date,
    User:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prediction:String
})

module.exports = mongoose.model('Datedaily', datedaily);