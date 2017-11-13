import React from 'react';
import DiaryLog from './DiaryLog.jsx';
import DiaryLogTotal from './DiaryLogTotal.jsx';

const Diary = ({ currentDay, handleAddFoodSubmit, handleQuickAddSubmit }) => {
  const { dailyTotal, Breakfast, Lunch, Dinner, Snacks, water, exercise, notes} = currentDay;
  
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h1>Your Food Diary for:</h1>
          <hr/>
          <DiaryLog mealType="Breakfast" data={Breakfast} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Lunch" data={Lunch} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Dinner" data={Dinner} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLog mealType="Snacks" data={Snacks} handleAddFoodSubmit={handleAddFoodSubmit} handleQuickAddSubmit={handleQuickAddSubmit} />
          <DiaryLogTotal data={dailyTotal} />
        </div>

        <div className="col-md-1"></div>
      </div> 
    </div>   
  );
}

export default Diary;