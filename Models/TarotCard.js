const mongoose = require('mongoose');
const tarotCardDeck = require('../Assets/cardDeck.json');


const tarotCardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    orientation:{
        type:Array,
        required:true
    },
    meta_description:{
        type:String,
        required:true
    },
    meta_upright:{
        type:String,
        require:true
    },
    meta_reversed: {
        type:String,
        required:true
    },
    meta_more_info_link:{
        type:String,
        required:true
    }
})

const tarotCardModel = mongoose.model('tarotcards',tarotCardSchema);

// tarotCardModel.createCollection().then(function (collection) { 
//     console.log(``); 
// });


async function findDocument(){
    try{
        const tarotDocument = await tarotCardModel.find({});
        if(tarotDocument.length == 0){
            await tarotCardModel.createCollection().then(function (collection){
                console.log(`TarotCard Collection is create`)
                tarotCardDeck.forEach(element => {
                    const tarotCard = new tarotCardModel({
                        name:element.name,
                        number:Number(element.number),
                        img:element.img,
                        orientation:element.orientation,
                        meta_description:element.meta_description,
                        meta_upright:element.meta_upright,
                        meta_reversed:element.meta_reversed,
                        meta_more_info_link:element.meta_more_info_link
                    })
                    tarotCard.save()
                    .then((result) => {
                        console.log(result.name + "has add to document")
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                });
            })
            
        }
    }catch(err){
        console.log(err)
    }
}

findDocument()

module.exports = tarotCardModel