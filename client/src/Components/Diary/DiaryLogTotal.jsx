import React from 'react';

const DiaryLogTotal = ({ dailyTotal, dailyGoal }) => (
  <table className="table table-responsive-md table-hover">
    <tbody>
      <tr>
        <td>
        </td>
        <td>{dailyTotal.calories}</td>
        <td>{dailyTotal.carbs}</td>
        <td>{dailyTotal.fats}</td>
        <td>{dailyTotal.protein}</td>
        <td>{dailyTotal.sodium}</td>
        <td>{dailyTotal.sugar}</td>
        <td></td>
      </tr>
      <tr>
        <td>
        </td>
        <td>{dailyGoal.calories}</td>
        <td>{dailyGoal.carbs}</td>
        <td>{dailyGoal.fats}</td>
        <td>{dailyGoal.protein}</td>
        <td>{dailyGoal.sodium}</td>
        <td>{dailyGoal.sugar}</td>
        <td></td>
      </tr>
      <tr>
        <td>
        </td>
        <td>{dailyTotal.calories - dailyGoal.calories}</td>
        <td>{dailyTotal.carbs - dailyGoal.carbs}</td>
        <td>{dailyTotal.fats - dailyGoal.fats}</td>
        <td>{dailyTotal.protein - dailyGoal.protein}</td>
        <td>{dailyTotal.sodium - dailyGoal.sodium}</td>
        <td>{dailyTotal.sugar - dailyGoal.sugar}</td>
        <td></td>
      </tr>     
    </tbody>
    <tfoot>
      <tr>
        <th className="col-md-5" scope="col"></th>
        <th className="col-md-1" scope="col">Calories<br />(kcal)</th>
        <th className="col-md-1" scope="col">Carbs<br />(g)</th>
        <th className="col-md-1" scope="col">Fat<br />(g)</th>
        <th className="col-md-1" scope="col">Protein<br />(g)</th>
        <th className="col-md-1" scope="col">Sodium<br />(mg)</th>
        <th className="col-md-1" scope="col">Sugar<br />(g)</th>
        <th className="col-md-1" scope="col"></th>
      </tr>
    </tfoot>
  </table>
)

export default DiaryLogTotal;