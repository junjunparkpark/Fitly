import React from 'react';
import DiaryLog from './DiaryLog.jsx';
import DiaryLogTotal from './DiaryLogTotal.jsx';

const Diary = ({ currentDay, handleAddFoodSubmit, handleFoodDelete }) => {
  const { dailyTotal, dailyGoal, Breakfast, Lunch, Dinner, Snacks, water, exercise, notes} = currentDay;
  
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h1>Your Food Diary for:</h1>
          <hr/>
          <table className="table table-responsive-md table-hover">
            <DiaryLog mealType="Breakfast" data={Breakfast} handleAddFoodSubmit={handleAddFoodSubmit} handleFoodDelete={handleFoodDelete} />
            <DiaryLog mealType="Lunch" data={Lunch} handleAddFoodSubmit={handleAddFoodSubmit} handleFoodDelete={handleFoodDelete} />
            <DiaryLog mealType="Dinner" data={Dinner} handleAddFoodSubmit={handleAddFoodSubmit} handleFoodDelete={handleFoodDelete} />
            <DiaryLog mealType="Snacks" data={Snacks} handleAddFoodSubmit={handleAddFoodSubmit} handleFoodDelete={handleFoodDelete} />

            <DiaryLogTotal dailyTotal={dailyTotal} dailyGoal={dailyGoal} />
          </table>
        </div>

        <div className="col-md-1"></div>
      </div> 
    </div>   
  );
}

export default Diary;