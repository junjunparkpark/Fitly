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
    this.fetchCurrentDateDiary();
  }

  componentDidMount() {
    // Prompt a modal to get goals from user
  }

  fetchCurrentDateDiary() {
    let date = this.state.dateStep >= 0 
      ? moment().add(this.state.dateStep, 'd').format('dddd, MMMM Do YYYY')
      : moment().subtract(Math.abs(this.state.dateStep), 'd').format('dddd, MMMM Do YYYY')
    this.setState({
      date: date
    });

    axios.get('/api/diary', {
      params: {
        date: date
      }
    })
      .then((response) => {
        this.setState(response.data, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadIncomingFood() {
    
  }

  handleAddFoodSubmit(event, mealType, data) {
    if (event) { event.preventDefault(); }
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
    this.setState({
      dateStep: this.state.dateStep + 1
    }, () => {
      this.fetchCurrentDateDiary();
    });
  }

  handleSubtractDay() {
    this.setState({
      dateStep: this.state.dateStep - 1
    }, () => {
      this.fetchCurrentDateDiary();
    });
  }

  handleFoodDelete(data, mealType) {
    let meal = this.state[`${mealType}`];
    let total = this.state.dailyTotal;
    let targetFood = JSON.stringify(data);
    let newFoods = meal.foods.filter(food => JSON.stringify(food) !== targetFood);
    
    
    this.setState({
      dailyTotal: {
        calories: total.calories - data.calories,
        carbs: total.carbs - data.carbs,
        fats: total.fats - data.fats,
        protein: total.protein - data.protein,
        sodium: total.sodium - data.sodium,
        sugar: total.sugar - data.sugar
      },
      [`${mealType}`]: {
        calories: meal.calories - data.calories,
        carbs: meal.carbs - data.carbs,
        fats: meal.fats - data.fats,
        protein: meal.protein - data.protein,
        sodium: meal.sodium - data.sodium,
        sugar: meal.sugar - data.sugar,
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
