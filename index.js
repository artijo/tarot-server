const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const testRoute = require('./Routes/test.js');
const randomCard = require('./Routes/randomCard.js'); //Ohm
const cors = require('cors');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({
  origin: "http://localhost:5173"
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/test', testRoute);
app.use('/randomTarot',randomCard); // Ohm


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
