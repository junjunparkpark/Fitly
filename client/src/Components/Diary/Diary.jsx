import React from 'react';
import DiaryLog from './DiaryLog.jsx';

const Diary = ({ currentDay }) => {
  const { breakfast, lunch, dinner, snacks, water, exercise, notes} = currentDay;
  
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h1>Your Food Diary for:</h1>
          <hr />
          <DiaryLog mealType="Breakfast" data={breakfast} />
          <DiaryLog mealType="Lunch" data={lunch} />
          <DiaryLog mealType="Dinner" data={dinner} />
          <DiaryLog mealType="Snacks" data={snacks} />
        </div>

        <div className="col-md-1"></div>
      </div> 
    </div>   
  );
}

export default Diary;