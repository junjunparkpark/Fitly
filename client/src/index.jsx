import React from 'react';
import ReactDOM from 'react-dom';
import DiaryLog from './Components/Diary/DiaryLog.jsx';

const App = () => (
  <div>
    <DiaryLog />
  </div>
);


ReactDOM.render(<App/>, document.getElementById('app'));
