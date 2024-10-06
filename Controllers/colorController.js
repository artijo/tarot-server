const colorSchema = require('../Models/colors');

function testcolor(req, res) {
    res.send('test color')
}

function InsertColor(req, res) {
    let newcolor = new colorSchema({
        day: 'ส',
        enhance: {
            color_enhance: {
                color_text: '#ffffff',
                enhance_color: 'black',
                thaicolor: 'สีดำ'
            }
        },
        featured: {
            color_featured: {
                color_text: '#ffffff',
                featured_color: 'brown',
                thaicolor: 'สีน้ำตาล'
            }
        },
        succeed: {
            color_succeed: {
                color_text: '#ffffff',
                succeed_color: 'blue',
                thaicolor: 'สีฟ้า'
            }
        },
        fortune: {
            color_fortune: {
                color_text: '#ffffff',
                fortune_color: 'red',
                thaicolor: 'สีแดง'
            }
        },
        patron: {
            color_patron: {
                color_text: '#000000',
                patron_color: 'pink',
                thaicolor: 'สีชมพู'
            }
        },
        forbidden: {
            color_forbidden: {
                color_text: '#ffffff',
                forbidden_color: 'green',
                thaicolor: 'สีเขียว'
            }
        }
    })
    newcolor.save().then((result) => {
        res.send(result)
    }).catch((err)=> console.log(err))
}

function showall(req, res) {
    colorSchema.find().then((result) => {
        res.send(result)
    }).catch((err)=> console.log(err))
}

function InsertColors(req,res) {
    let newcolor = new colorSchema(req.body)
    newcolor.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.state(201)
        console.log(err)
    })
}

function deleteColors(req, res) {
    var cid = req.params.id
    colorSchema.findByIdAndDelete(cid).then((result) => {
        res.send(result)
    }).catch((err)=> console.log(err))
}

module.exports = {
    testcolor,
    InsertColor,
    showall,
    InsertColors,
    deleteColors
}