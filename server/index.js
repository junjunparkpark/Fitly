const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { DiaryEntry } = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/diary', (req, res) => {
  DiaryEntry.find({date: req.query}, (err, entry) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(entry);
    }
  })
});

app.post('/api/diary', (req, res) => {
  var newEntry = new DiaryEntry(req.body);
  newEntry.save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});