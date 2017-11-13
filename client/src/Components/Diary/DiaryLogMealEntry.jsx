import React from 'react';

const DiaryLogMealEntry = ({ mealType, data, handleFoodDelete }) => (
  <tr>
    <td>{data.name}</td>
    <td className="nutrient-column">{data.calories}</td>
    <td className="nutrient-column">{data.carbs}</td>
    <td className="nutrient-column">{data.fats}</td>
    <td className="nutrient-column">{data.protein}</td>
    <td className="nutrient-column">{data.sodium}</td>
    <td className="nutrient-column">{data.sugar}</td>
    <td><button className="btn btn-danger btn-xs" onClick={(e) => handleFoodDelete(data, mealType) }>delete</button></td>
  </tr>
);

export default DiaryLogMealEntry;

