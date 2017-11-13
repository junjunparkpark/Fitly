const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/diary', (req, res) => {
  fs.readFile(path.join(__dirname, '../database/foods.txt'), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500); 
    }
    let dates = data.toString().split('\\n').map(date => JSON.parse(date));
    console.log(dates);
  });
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});