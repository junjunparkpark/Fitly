import React from 'react';
import DiaryLog from './DiaryLog.jsx';

const Diary = () => {
  return (
    <div>
      <div className="container">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h1>Your Food Diary For:</h1>
          <hr />
          <DiaryLog />
        </div>

        <div className="col-md-1"></div>
      </div> 
    </div>   
  );
}

export default Diary;