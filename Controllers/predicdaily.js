const sixCategories = require('../Assets/sixCategories.json');
const dailyModel = require('../Models/Datedaily')
function Dailypredictions (req,res){
    const now = new Date()
    const thailandoffset = 7*60;
    const thailandnow = new Date(now.getTime()+(thailandoffset*60000))
    thailandnow.setHours(0,0,0,0)
    thailandnow.setDate(thailandnow.getDate()+1)
    console.log(thailandnow);

    dailyModel.findOne(   
        {
            date:{
                $eq: thailandnow,
            }
        },
        {
            '_id':0
        }
    )
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.send(error);
    });

}

module.exports = { Dailypredictions };