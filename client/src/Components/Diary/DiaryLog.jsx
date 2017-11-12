import React from 'react';

const DiaryLog = () => {
  return (
    <table className="table table-responsive-md table-hover">
      <thead className="thead-light">
        <tr>
          <th scope="col" colSpan="2">* Type of Meal(Breakfast, lunch, dinner) *</th>
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
        <tr>
          <td colSpan="2">*food name</td>
          <td>*cals*</td>
          <td>*carbs*</td>
          <td>*fat*</td>
          <td>*protein*</td>
          <td>*sodium*</td>
          <td>*sugar*</td>
          <td><button>delete</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">
            <button>Add Food</button> |
            <button>Quick Tools</button>
          </td>
          <td>*cals totals*</td>
          <td>*carbs totals*</td>
          <td>*fat totals *</td>
          <td>*protein totals*</td>
          <td>*sodium totals *</td>
          <td>*sugar totals*</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default DiaryLog;