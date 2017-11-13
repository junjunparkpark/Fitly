import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Diary from './Components/Diary/Diary.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: Date.now(),
      breakfast: {
        calories: 0,
        carbs: 0,
        fats: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        foods: []
      },
      lunch: {
        calories: 0,
        carbs: 0,
        fats: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        foods: []
      },
      dinner: {
        calories: 0,
        carbs: 0,
        fats: 0,
        protein: 0,
        sodium: 0,
        sugar: 0,
        foods: []
      },
      snacks: {
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
  }

  componentWillMount() {
    // Implement a fetch to our database that will fill state based on current date
  }

  render() {
    return (
      <div>
        <Diary currentDay={this.state} />
      </div>
    )
  }
};


ReactDOM.render(<App/>, document.getElementById('app'));
