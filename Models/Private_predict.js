const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privateSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    massage:[
        { question:String,
        asn:String
        }]
})
module.exports = mongoose.model('privatepredict', privateSchema);