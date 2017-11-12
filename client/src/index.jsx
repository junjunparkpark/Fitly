import React from 'react';
import ReactDOM from 'react-dom';
import DiaryLog from './Components/Diary/DiaryLog.jsx';

const App = () => (
  <div>
    <div className="container">
      <h1>Your Food Diary For:</h1>
    </div>
    <div className="container">
      <div className="col-md-1">
      </div>
      <div className="col-md-10">
      <DiaryLog />
      </div>
      <div className="col-md-1">
      </div>
    </div>
  </div>
);


ReactDOM.render(<App/>, document.getElementById('app'));
