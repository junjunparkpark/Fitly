var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fitly', { useMongoClient: true });
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  weight: Number,
  goalWeight: Number
});

var foodSchema = mongoose.Schema({
  name: String,
  calories: Number,
  carbs: Number,
  fats: Number,
  protein: Number,
  sodium: Number,
  sugar: Number
});

var diaryEntrySchema = mongoose.Schema({
  date: String,
  dateStep: Number,
  user: String,
  dailyTotal: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number
  },
  dailyGoal: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number
  },
  Breakfast: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number,
    foods: []
  },
  Lunch: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number,
    foods: []
  },
  Dinner: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number,
    foods: []
  },
  Snacks: {
    calories: Number,
    carbs: Number,
    fats: Number,
    protein: Number,
    sodium: Number,
    sugar: Number,
    foods: []
  },
  exercise: {
    caloriesBurned: Number,
    exercises: []
  },
  notes: {
    text: String
  },
  water: {
    total: Number
  }
});

// Possible Database Schema Designs

// var userDay = {
//   date: Date.now(),
//     breakfast: {
//     calories: Number,
//       carbs: Number,
//         fats: Number,
//           protein: Number,
//             sodium: Number,
//               sugar: Number,
//                 foods: []
//   },
//   lunch: {
//     calories: Number,
//       carbs: Number,
//         fats: Number,
//           protein: Number,
//             sodium: Number,
//               sugar: Number,
//                 foods: []
//   },
//   dinner: {
//     calories: Number,
//       carbs: Number,
//         fats: Number,
//           protein: Number,
//             sodium: Number,
//               sugar: Number,
//                 foods: []
//   },
//   snacks: {
//     calories: Number,
//       carbs: Number,
//         fats: Number,
//           protein: Number,
//             sodium: Number,
//               sugar: Number,
//                 foods: []
//   },
//   exercise: {
//     caloriesBurned: Number,
//       exercises: []
//   },
//   notes: {
//     text: String
//   },
//   water: {
//     total: Number
//   }
// }