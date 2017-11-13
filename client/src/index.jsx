import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Diary from './Components/Diary/Diary.jsx';
import moment from 'moment';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: moment().format('dddd, MMMM Do YYYY'),
      dateStep: 0,
      user: '',
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

    this.handleAddFoodSubmit = this.handleAddFoodSubmit.bind(this);
    this.handleFoodDelete = this.handleFoodDelete.bind(this);
    this.handleAddDay = this.handleAddDay.bind(this);
    this.handleSubtractDay = this.handleSubtractDay.bind(this);
  }

  componentWillMount() {
    // Implement a fetch to our database that will fill state based on current date
  }

  componentDidMount() {
    // Prompt a modal to get goals from user
    this.fetchCurrentDateDiary();
    // this.setState({
    
    // })
  }

  fetchCurrentDateDiary() {
    axios.get('/api/diary')
      .then((response) => {
        this.setState(JSON.parse(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAddFoodSubmit(event, mealType, data) {
    event.preventDefault();
    let total = this.state.dailyTotal;
    let meal = this.state[`${mealType}`];
    
    this.setState({
      dailyTotal: {
        calories: total.calories + data.calories,
        carbs: total.carbs + data.carbs,
        fats: total.fats + data.fats,
        protein: total.protein + data.protein,
        sodium: total.sodium + data.sodium,
        sugar: total.sugar + data.sugar
      },  
      [`${mealType}`]: {
        calories: meal.calories + data.calories,
        carbs: meal.carbs + data.carbs,
        fats: meal.fats + data.fats,
        protein: meal.protein + data.protein,
        sodium: meal.sodium + data.sodium,
        sugar: meal.sugar + data.sugar,
        foods: meal.foods.concat(data)
      }
    });

  }

  handleQuickAddSubmit(event) {
    event.preventDefault();
  }

  handleNumberChange(e) {
    this.setState({ [`${e.target.name}`]: parseInt(e.target.value) });
  }

  handleStringChange(e) {
    this.setState({ [`${e.target.name}`]: e.target.value });
  }

  handleAddDay() {
    let newDate = moment().add(1, 'd');
    this.setState({step: this.state.step + 1})
    this.fetchCurrentDateDiary();
  }

  handleSubtractDay() {
    let newDate = moment(this.state.date).subtract(1, 'd');
    this.setState({ step: this.state.step - 1 })
    console.log(newDate);
    this.fetchCurrentDateDiary();
  }

  handleFoodDelete(data, mealType) {
    console.log('handleFoodDelete!!!  ', JSON.stringify(this.state));
    let targetFood = JSON.stringify(data);
    let newFoods = this.state[`${mealType}`].foods.filter(food => JSON.stringify(food) !== targetFood);
    
    this.setState({
      dailyTotal: {
        calories: this.state.dailyTotal.calories - data.calories,
        carbs: this.state.dailyTotal.carbs - data.carbs,
        fats: this.state.dailyTotal.fats - data.fats,
        protein: this.state.dailyTotal.protein - data.protein,
        sodium: this.state.dailyTotal.sodium - data.sodium,
        sugar: this.state.dailyTotal.sugar - data.sugar
      },
      [`${mealType}`]: {
        calories: this.state[`${mealType}`].calories - data.calories,
        carbs: this.state[`${mealType}`].carbs - data.carbs,
        fats: this.state[`${mealType}`].fats - data.fats,
        protein: this.state[`${mealType}`].protein - data.protein,
        sodium: this.state[`${mealType}`].sodium - data.sodium,
        sugar: this.state[`${mealType}`].sugar - data.sugar,
        foods: newFoods
      }      
    });
  }

  render() {
    return (
      <div>
        <Diary 
          id="diary" 
          currentDay={this.state} 
          handleAddFoodSubmit={this.handleAddFoodSubmit} 
          handleFoodDelete={this.handleFoodDelete} 
          handleAddDay={this.handleAddDay}
          handleSubtractDay={this.handleSubtractDay}
        />
      </div>
    )
  }
};


ReactDOM.render(<App/>, document.getElementById('app'));
