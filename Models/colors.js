const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    day: String,
    enhance: {
        color_enhance: {
            color_text: String,
            enhance_color: String,
            thaicolor: String
        }
    },
    featured: {
        color_featured: {
            color_text: String,
            featured_color: String,
            thaicolor: String
        }
    },
    succeed: {
        color_succeed: {
            color_text: String,
            succeed_color: String,
            thaicolor: String
        }
    },
    fortune: {
        color_fortune: {
            color_text: String,
            fortune_color: String,
            thaicolor: String
        }
    },
    patron: {
        color_patron: {
            color_text: String,
            patron_color: String,
            thaicolor: String
        }
    },
    forbidden: {
        color_forbidden:{
            color_text: String,
            forbidden_color: String,
            thaicolor: String
        }
    }
});

const colormodel = mongoose.model('colors', colorSchema)

module.exports = colormodel