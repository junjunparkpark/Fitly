import React from 'react';
import DiaryLogCategoryRow from './DiaryLogCategoryRow.jsx';

const DiaryLogTotal = ({ dailyTotal, dailyGoal }) => (
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
      <DiaryLogCategoryRow />     
    </tbody>
)

export default DiaryLogTotal;