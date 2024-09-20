import express from 'express';
import bodyParser from 'body-parser';
import { getRandom } from './scripts/tarotRandom.js';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/randomCard', (req, res) => {
  const excludeCards = [2,4,6,8,10];
  const randomCard = getRandom(excludeCards);
  res.json(randomCard); 
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});