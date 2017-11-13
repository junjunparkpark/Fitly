import React from 'react';
import DiaryLogMealEntry from './DiaryLogMealEntry.jsx';
import QuickAddButton from './QuickAddButton.jsx';
import AddFoodModalButton from './AddFoodModalButton.jsx';


const DiaryLog = ({ mealType, data, handleAddFoodSubmit, handleQuickAddSubmit }) => {
  return (
    <table className="table table-responsive-md table-hover">
      <thead className="thead-light">
        <tr>
          <th className="col-md-5" scope="col"><h2>{mealType}</h2></th>
          <th className="col-md-1" scope="col">Calories<br/>(kcal)</th>
          <th className="col-md-1" scope="col">Carbs<br/>(g)</th>
          <th className="col-md-1" scope="col">Fat<br/>(g)</th>
          <th className="col-md-1" scope="col">Protein<br/>(g)</th>
          <th className="col-md-1" scope="col">Sodium<br/>(mg)</th>
          <th className="col-md-1" scope="col">Sugar<br/>(g)</th>
          <th className="col-md-1" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          data.foods.map(food => <DiaryLogMealEntry data={food} />)
        }
      </tbody>
      <tfoot>
        <tr>
          <td>
            <AddFoodModalButton mealType={mealType} handleAddFoodSubmit={handleAddFoodSubmit} /> 
          </td>
          <td>{ data.calories }</td>
          <td>{ data.carbs }</td>
          <td>{ data.fats }</td>
          <td>{ data.protein }</td>
          <td>{ data.sodium }</td>
          <td>{ data.sugar }</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}


export default DiaryLog;