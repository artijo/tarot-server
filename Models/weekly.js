// ดูดวงรายสัปดาห์ ตามราศี
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tarotweekly_zodiac = new Schema({
startdate:Date,
enddate:Date,
CAPRICORNUS:String,
AQUARIUS:String,
PISCES:String,
ARIES :String,
TAURUS:String,
GEMINI:String,
CANCER:String,
LEO:String,
VIRGO:String,
LIBRA:String,
SCORPIO:String,
SAGITARIUS:String
},{timestamps:true})
module.exports = mongoose.model('tarotweekly_zodiac',tarotweekly_zodiac);