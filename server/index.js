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
  console.log(req.query.date)
  if (!dummyData[req.query.date]) {
    dummyData[req.query.date] = template;
    dummyData[req.query.date].date = req.query.date;
    console.log('it does not exist: ', dummyData[req.query.date])
    res.json(dummyData[req.query.date]);
  } else {
    console.log('it exists: ', dummyData[req.query.date])
    res.json(dummyData[req.query.date]);
  }

    // MONGOOSE DB QUERIES
  // DiaryEntry.find({date: req.query.date}, (err, entry) => {
  //   if (err) {
  //     console.log(err);
  //     res.sendStatus(404);
  //   } else {
  //     res.json(entry);
  //   }
  // });
});

app.post('/api/diary', (req, res) => {
  dummyData[req.body.date] = req.body;
  res.sendStatus(201);
    // MONGOOSE DB QUERIES
  // var newEntry = new DiaryEntry(req.body);
  // newEntry.save((err) => {
  //   if (err) {
  //     console.log(err);
  //     res.sendStatus(500);
  //   } else {
  //     res.sendStatus(201);
  //   }
  // })
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


var dummyData = {
  'Monday, November 13th 2017': {
    date: 'Monday, November 13th 2017',
    dailyTotal: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0
    },
    dailyGoal: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0
    },
    Breakfast: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      foods: [
        // {
        //   name: 'Coffee',
        //   calories: 0,
        //   carbs: 0,
        //   fats: 0,
        //   protein: 0,
        //   sodium: 0,
        //   sugar: 0
        // },
        // {
        //   name: 'Apple',
        //   calories: 95,
        //   carbs: 24,
        //   fats: 0,
        //   protein: 0,
        //   sodium: 0,
        //   sugar: 0
        // }
    
      ]
    },
    Lunch: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      foods: []
    },
    Dinner: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      foods: []
    },
    Snacks: {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      foods: []
    },
    exercise: {
      caloriesBurned: 0,
      exercises: []
    },
    notes: {
      text: ''
    },
    water: {
      total: 0
    }   
  }
};

var template = {
  dailyTotal: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0
  },
  dailyGoal: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0
  },
  Breakfast: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    foods: []
  },
  Lunch: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    foods: []
  },
  Dinner: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    foods: []
  },
  Snacks: {
    calories: 0,
    carbs: 0,
    fats: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    foods: []
  },
  exercise: {
    caloriesBurned: 0,
    exercises: []
  },
  notes: {
    text: ''
  },
  water: {
    total: 0
  }
}