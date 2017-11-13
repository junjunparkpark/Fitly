import React from 'react';
import DiaryLogMealEntry from './DiaryLogMealEntry.jsx';
import QuickAddButton from './QuickAddButton.jsx';
import AddFoodModalButton from './AddFoodModalButton.jsx';
import DiaryLogCategoryRow from './DiaryLogCategoryRow.jsx';



const DiaryLog = ({ mealType, data, handleAddFoodSubmit, handleQuickAddSubmit }) => {
  return (
    <tbody>
      {
        data.foods.map(food => <DiaryLogMealEntry data={food} />)
      }
      <tr>
        <td>
          <AddFoodModalButton mealType={mealType} handleAddFoodSubmit={handleAddFoodSubmit} />
        </td>
        <td>{data.calories}</td>
        <td>{data.carbs}</td>
        <td>{data.fats}</td>
        <td>{data.protein}</td>
        <td>{data.sodium}</td>
        <td>{data.sugar}</td>
        <td></td>
      </tr>
    </tbody>
  );
}


export default DiaryLog;