
//Ohm
// import cardDeck from './cardDeck.json' assert {type: 'json'};
const TarotCard = require('../Models/TarotCard');
const path = require('path');
const fs = require('fs');

const getCardDeck = async () => {
    try {
        const result = await TarotCard.find();
        const tarot_cardDeck = result.map(card => card);
        return tarot_cardDeck;
    } catch (err) {
        console.log(err);
        return [];
    }
};

const getRandom = async (excludeNumbers = []) => {
    const cardDeck = await getCardDeck();

    let oldDeck = Array.from({ length: cardDeck.length }, (_, x) => x);

    let newDeck = oldDeck.filter(number => !excludeNumbers.includes(number));

    if (newDeck.length === 0) {
        return 0;
    }

    const randomIndex = Math.floor(Math.random() * newDeck.length);
    const randomNumber = newDeck[randomIndex];

    for (let i = 0; i < cardDeck.length; i++) {
        let indexOfDeckCard = cardDeck[i].number;
        if (indexOfDeckCard === randomNumber) {
            return cardDeck[i];
        }
    }
};

const randomTarotCard = async (req, res) => {
    const body = req.body;
    const randomCard = await getRandom(body.excludeNumbers);
    if (randomCard === 0) {
        return res.send({}); 
    }
    res.send(randomCard);
};


const imagePath = path.join(__dirname, '../public/img/deck');

const getPicture = (req, res) => {
    const imageName = req.params.imageName;
    const imagePathFull = path.join(imagePath, imageName);

    fs.access(imagePathFull, fs.constants.F_OK, (err) =>{
        if(err){
            res.send(err)
        }else{
            res.sendFile(imagePathFull);
        }
    }); 
}

module.exports = { randomTarotCard , getPicture};
