import React from 'react';

const DiaryLogMealEntry = ({ data }) => (
  <tr>
    <td colSpan="2">{data.name}</td>
    <td>{data.calories}</td>
    <td>{data.carbs}</td>
    <td>{data.fat}</td>
    <td>{data.protein}</td>
    <td>{data.sodium}</td>
    <td>{data.sugar}</td>
    <td><button>delete</button></td>
  </tr>
);

export default DiaryLogMealEntry;

