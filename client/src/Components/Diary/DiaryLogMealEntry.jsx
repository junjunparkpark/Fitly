import React from 'react';

const DiaryLogMealEntry = ({ data }) => (
  <tr>
    <td className="nutrient-column">{data.name}</td>
    <td className="nutrient-column">{data.calories}</td>
    <td className="nutrient-column">{data.carbs}</td>
    <td className="nutrient-column">{data.fats}</td>
    <td className="nutrient-column">{data.protein}</td>
    <td className="nutrient-column">{data.sodium}</td>
    <td className="nutrient-column">{data.sugar}</td>
    <td><button className="btn btn-danger btn-xs">delete</button></td>
  </tr>
);

export default DiaryLogMealEntry;

