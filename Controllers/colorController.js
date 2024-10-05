const colorSchema = require('../Models/colors');

function testcolor(req, res) {
    res.send('test color')
}

function InsertColor(req, res) {
    let newcolor = new colorSchema({
        day: 'TUE',
        enhance: {
            color_enhance: {
                color_text: '#ffffff',
                enhance_color:'blue'
            }
        },
        featured: {
            color_featured: {
                color_text: '#ffffff',
                featured_color : 'green'
            }
        },
        succeed: {
            color_succeed: {
                color_text: '#000000',
                succeed_color: 'pink'
            }
        },
        fortune: {
            color_fortune: {
                color_text: '#ffffff',
                fortune_color:'blue'    
            }
        },
        patron: {
            color_patron: {
                color_text: '#ffffff',
                patron_color: 'red'
            }
        },
        forbidden: {
            color_forbidden: {
                color_text: '#000000',
                forbidden_color:'yellow'
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