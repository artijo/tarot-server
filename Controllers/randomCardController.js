
//Ohm
// import cardDeck from './cardDeck.json' assert {type: 'json'};
const path = require('path');
const cardDeck = require('./cardDeck.json');
const fs = require('fs');
const { error } = require('console');

const getRandom = (excludeNumbers = []) => {

    // อันเก่า
    // let oldDeckCard = cardDeck;
    let oldDeck = Array.from({length:cardDeck.length}, (_,x) => x);
    

    //อันใหม่
    let newDeck;
    newDeck =  oldDeck.filter(number => !excludeNumbers.includes(number));

    // console.log(newDeck)

    if(newDeck.length === 0){
        return 0;
    }

    const randomIndex = Math.floor(Math.random() * newDeck.length);
    const randomNumber = newDeck[randomIndex];

    for(let i = 0; i < cardDeck.length ; i++){
        let indexOfDeckCard = cardDeck[i].number;
        // console.log(indexOfDeckCard)
        if(indexOfDeckCard == randomNumber){
            // console.log(cardDeck[i])
            return cardDeck[i]; //Return ค่าที่สุ่มได้
        }
    }
 
}

const randomTarotCard = (req, res) => {
    const excludeCards = [2,4,6,8,10];
    const randomCard = getRandom(excludeCards);
    res.json(randomCard); 
    
};


const imagePath = path.join(__dirname, '../deck');

const getPicture = (req, res) => {
    const imageName = req.params.imageName + ".jpg";
    const imagePathFull = path.join(imagePath, imageName);
    // res.send({
    //     imageName: imagePathFull    
    // })

    fs.access(imagePathFull, fs.constants.F_OK, (err) =>{
        if(err){
            res.send(err)
        }else{
            res.sendFile(imagePathFull);
        }
    }); 
}

module.exports = { randomTarotCard , getPicture};
