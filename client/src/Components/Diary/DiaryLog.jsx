import React from 'react';
import DiaryLogMealEntry from './DiaryLogMealEntry.jsx';
import AddFoodButton from './AddFoodButton.jsx';

const DiaryLog = ({ mealType, data }) => {
  return (
    <table className="table table-responsive-md table-hover">
      <thead className="thead-light">
        <tr>
          <th scope="col" colSpan="2"><h2>{mealType}</h2></th>
          <th scope="col">Calories<br/>(kcal)</th>
          <th scope="col">Carbs<br/>(g)</th>
          <th scope="col">Fat<br/>(g)</th>
          <th scope="col">Protein<br/>(g)</th>
          <th scope="col">Sodium<br/>(mg)</th>
          <th scope="col">Sugar<br/>(g)</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          data.foods.map(food => <DiaryLogMealEntry data={food} />)
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2"><AddFoodButton/></td>
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

// {
//   calories: 0,
//     carbs: 0,
//       fats: 0,
//         protein: 0,
//           sodium: 0,
//             sugar: 0,
//               foods: []
// },

export default DiaryLog;