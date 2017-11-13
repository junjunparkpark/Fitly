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
  breakfast: [],
  lunch:[],
  dinner: [],
  snacks: [],
  note: String,
  exercise: {
    caloriesBurned: Number,
    exercises: []
  },
  water: Number,
  userId: String
});

// Possible Database Schema Designs

// var userDay = {
//   date: Date.now(),
//     breakfast: {
//     calories: 0,
//       carbs: 0,
//         fats: 0,
//           protein: 0,
//             sodium: 0,
//               sugar: 0,
//                 foods: []
//   },
//   lunch: {
//     calories: 0,
//       carbs: 0,
//         fats: 0,
//           protein: 0,
//             sodium: 0,
//               sugar: 0,
//                 foods: []
//   },
//   dinner: {
//     calories: 0,
//       carbs: 0,
//         fats: 0,
//           protein: 0,
//             sodium: 0,
//               sugar: 0,
//                 foods: []
//   },
//   snacks: {
//     calories: 0,
//       carbs: 0,
//         fats: 0,
//           protein: 0,
//             sodium: 0,
//               sugar: 0,
//                 foods: []
//   },
//   exercise: {
//     caloriesBurned: 0,
//       exercises: []
//   },
//   notes: {
//     text: ''
//   },
//   water: {
//     total: 0
//   }
// }