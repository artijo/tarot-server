const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// ดูดวงรายวันตามวันเกิด
const tarotdaily_birthday = new Schema({
    Monday:String,
    Tuesday:String,
    Wednesday:String,
    Thursday:String,
    Firday:String,
    Saturday:String,
    Sunday:String
});
// ดูดวงรายสัปดาห์ ตามราศึ
const tarotweekly_zodiac = new Schema({
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
})
module.exports = mongoose.model('tarotdaily_birth', tarotdaily_birthday,'tarotweekly_zodiac',tarotweekly_zodiac);