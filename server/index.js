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
  console.log(req.query.date);

  if (!dummyData[req.query.date]) {
    dummyData[req.query.date] = template;
    dummyData[req.query.date].date = req.query.date;
    res.json(dummyData[req.query.date]);
  } else {
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
  'Tuesday, November 14th 2017': {
    date: 'Tuesday, November 14th 2017',
    dailyTotal: {
      calories: 1115,
      carbs: 168,
      fats: 14,
      protein: 83,
      sodium: 809,
      sugar: 56
    },
    dailyGoal: {
      calories: 2000,
      carbs: 200,
      fats: 44,
      protein: 200,
      sodium: 2000,
      sugar: 40
    },
    Breakfast: {
      calories: 95,
      carbs: 24,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 9,
      foods: [
        {
          name: 'Coffee',
          calories: 0,
          carbs: 0,
          fats: 0,
          protein: 0,
          sodium: 0,
          sugar: 0
        },
        {
          name: 'Apple',
          calories: 95,
          carbs: 24,
          fats: 0,
          protein: 0,
          sodium: 0,
          sugar: 9
        }
    
      ]
    },
    Lunch: {
      calories: 460,
      carbs: 84,
      fats: 5,
      protein: 24,
      sodium: 684,
      sugar: 47,
      foods: [
        {
          name: 'Subway Roast Beef Flatbread - 6 inch',
          calories: 320,
          carbs: 45,
          fats: 5,
          protein: 24,
          sodium: 660,
          sugar: 8
        },
        {
          name: 'Coca-Cola - 12 oz',
          calories: 140,
          carbs: 39,
          fats: 0,
          protein: 0,
          sodium: 24,
          sugar: 39
        }
      ]
    },
    Dinner: {
      calories: 560,
      carbs: 60,
      fats: 9,
      protein: 59,
      sodium: 125,
      sugar: 0,
      foods: [
        {
          name: 'White Rice',
          calories: 260,
          carbs: 60,
          fats: 0,
          protein: 5,
          sodium: 5,
          sugar: 0
        },
        {
          name: 'Chicken Breast',
          calories: 300,
          carbs: 0,
          fats: 9,
          protein: 54,
          sodium: 120,
          sugar: 0
        }
      ]
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
  },
'Wednesday, November 15th 2017': {
  date: 'Wednesday, November 15th 2017',
    dailyTotal: {
      calories: 1456,
      carbs: 210,
      fats: 22,
      protein: 97,
      sodium: 1443,
      sugar: 52
    },
    dailyGoal: {
      calories: 2000,
      carbs: 200,
      fats: 44,
      protein: 200,
      sodium: 2000,
      sugar: 40
    },
    Breakfast: {
      calories: 436,
      carbs: 66,
      fats: 8,
      protein: 14,
      sodium: 634,
      sugar: 5,
      foods: [
        {
          name: 'Coffee',
          calories: 0,
          carbs: 0,
          fats: 0,
          protein: 0,
          sodium: 0,
          sugar: 0
        },
        {
          name: 'Bagel with Cream Cheese',
          calories: 436,
          carbs: 66,
          fats: 8,
          protein: 14,
          sodium: 634,
          sugar: 5
        }

      ]
    },
    Lunch: {
      calories: 460,
      carbs: 84,
      fats: 5,
      protein: 24,
      sodium: 684,
      sugar: 47,
      foods: [
        {
          name: 'Subway Roast Beef Flatbread - 6 inch',
          calories: 320,
          carbs: 45,
          fats: 5,
          protein: 24,
          sodium: 660,
          sugar: 8
        },
        {
          name: 'Coca-Cola - 12 oz',
          calories: 140,
          carbs: 39,
          fats: 0,
          protein: 0,
          sodium: 24,
          sugar: 39
        }
      ]
    },
    Dinner: {
      calories: 560,
      carbs: 60,
      fats: 9,
      protein: 59,
      sodium: 125,
      sugar: 0,
      foods: [
        {
          name: 'White Rice',
          calories: 260,
          carbs: 60,
          fats: 0,
          protein: 5,
          sodium: 5,
          sugar: 0
        },
        {
          name: 'Chicken Breast',
          calories: 300,
          carbs: 0,
          fats: 9,
          protein: 54,
          sodium: 120,
          sugar: 0
        }
      ]
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
    calories: 2000,
    carbs: 200,
    fats: 44,
    protein: 200,
    sodium: 2000,
    sugar: 40
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