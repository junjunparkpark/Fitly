import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Diary from './Components/Diary/Diary.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: Date.now(),
      totalCalories: 0,
      totalCarbs: 0,
      totalFats: 0,
      totalProtein: 0,
      totalSodium: 0,
      totalSugar: 0,
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

    this.handleAddFoodSubmit = this.handleAddFoodSubmit.bind(this);
    this.handleQuickAddSubmit = this.handleQuickAddSubmit.bind(this);
  }

  componentWillMount() {
    // Implement a fetch to our database that will fill state based on current date
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleAddFoodSubmit(event, mealType, data) {
    event.preventDefault();
    console.log(mealType);
   
    this.setState({
      [`${mealType}`]: {
        calories: this.state[`${mealType}`].calories + data.calories,
        carbs: this.state[`${mealType}`].carbs + data.carbs,
        fats: this.state[`${mealType}`].fats + data.fats,
        protein: this.state[`${mealType}`].protein + data.protein,
        sodium: this.state[`${mealType}`].sodium + data.sodium,
        sugar: this.state[`${mealType}`].sugar + data.sugar,
        foods: this.state[`${mealType}`].foods.concat(data)
      }
    })

  }

  handleQuickAddSubmit(event) {
    event.preventDefault();
    console.log('handleQuickAdd was invoked!', event);
  }

  render() {
    return (
      <div>
        <Diary currentDay={this.state} handleAddFoodSubmit={this.handleAddFoodSubmit} handleQuickAddSubmit={this.handleQuickAddSubmit} />
      </div>
    )
  }
};


ReactDOM.render(<App/>, document.getElementById('app'));
