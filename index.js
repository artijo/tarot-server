const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const testRoute = require('./Routes/test.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/test', testRoute);


app.get('/randomCard', (req, res) => {
  const excludeCards = [2,4,6,8,10];
  const randomCard = getRandom(excludeCards);
  res.json(randomCard); 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
