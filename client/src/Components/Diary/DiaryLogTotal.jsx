import React from 'react';
import DiaryLogCategoryRow from './DiaryLogCategoryRow.jsx';

const DiaryLogTotal = ({ dailyTotal, dailyGoal }) => (
    <tbody>
      <tr>
        <td>
        </td>
        <td className="nutrient-column">{dailyTotal.calories}</td>
        <td className="nutrient-column">{dailyTotal.carbs}</td>
        <td className="nutrient-column">{dailyTotal.fats}</td>
        <td className="nutrient-column">{dailyTotal.protein}</td>
        <td className="nutrient-column">{dailyTotal.sodium}</td>
        <td className="nutrient-column">{dailyTotal.sugar}</td>
        <td className="nutrient-column"></td>
      </tr>
      <tr>
        <td>
        </td>
        <td className="nutrient-column">{dailyGoal.calories}</td>
        <td className="nutrient-column">{dailyGoal.carbs}</td>
        <td className="nutrient-column">{dailyGoal.fats}</td>
        <td className="nutrient-column">{dailyGoal.protein}</td>
        <td className="nutrient-column">{dailyGoal.sodium}</td>
        <td className="nutrient-column">{dailyGoal.sugar}</td>
        <td className="nutrient-column"></td>
      </tr>
      <tr>
        <td>
        </td>
        <td className="nutrient-column">{dailyTotal.calories - dailyGoal.calories}</td>
        <td className="nutrient-column">{dailyTotal.carbs - dailyGoal.carbs}</td>
        <td className="nutrient-column">{dailyTotal.fats - dailyGoal.fats}</td>
        <td className="nutrient-column">{dailyTotal.protein - dailyGoal.protein}</td>
        <td className="nutrient-column">{dailyTotal.sodium - dailyGoal.sodium}</td>
        <td className="nutrient-column">{dailyTotal.sugar - dailyGoal.sugar}</td>
        <td className="nutrient-column"></td>
      </tr>
      <tr>
        <th className="col-md-5" ></th>
        <th className="col-md-1 nutrition-category" >Calories<br />(kcal)</th>
        <th className="col-md-1 nutrition-category" >Carbs<br />(g)</th>
        <th className="col-md-1 nutrition-category" >Fat<br />(g)</th>
        <th className="col-md-1 nutrition-category" >Protein<br />(g)</th>
        <th className="col-md-1 nutrition-category" >Sodium<br />(mg)</th>
        <th className="col-md-1 nutrition-category" >Sugar<br />(g)</th>
        <th className="col-md-1 " ></th>
      </tr>  
    </tbody>
)

export default DiaryLogTotal;