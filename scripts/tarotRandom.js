import cardDeck from './cardDeck.json' assert {type: 'json'};

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

export { getRandom };
