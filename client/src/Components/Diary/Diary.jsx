import React from 'react';
import DiaryLog from './DiaryLog.jsx';

const Diary = ({ currentDay, handleAddFoodSubmit, handleQuickAddSubmit }) => {
  const { breakfast, lunch, dinner, snacks, water, exercise, notes} = currentDay;
  
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h1>Your Food Diary for:</h1>
          <hr/>
          <DiaryLog mealType="Breakfast" data={breakfast} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Lunch" data={lunch} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Dinner" data={dinner} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Snacks" data={snacks} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
        </div>

        <div className="col-md-1"></div>
      </div> 
    </div>   
  );
}

export default Diary;