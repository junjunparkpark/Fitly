import React from 'react';
import DiaryLog from './DiaryLog.jsx';
import DiaryLogTotal from './DiaryLogTotal.jsx';

const Diary = ({ currentDay, handleAddFoodSubmit, handleFoodDelete, saveCurrentDateDiary }) => {
  const { date, dailyTotal, dailyGoal, Breakfast, Lunch, Dinner, Snacks, water, exercise, notes} = currentDay;
  
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <div className="center">
            <h1 className="app-header">Your Food Diary for:</h1>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={() => saveCurrentDateDiary('subtract')}>{'<'}</button>
              <button type="button" className="btn btn-primary">{date}</button>
              <button type="button" className="btn btn-primary" onClick={() => saveCurrentDateDiary('add') }>{'>'}</button>
            </div>
          </div>
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