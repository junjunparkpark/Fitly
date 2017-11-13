import React from 'react';


const DiaryLogCategoryRow = ({ type }) => (
  <thead className="thead-light">
    <tr>
      <th className="col-md-5" >{type}</th>
      <th className="col-md-1 nutrition-category" >Calories<br />(kcal)</th>
      <th className="col-md-1 nutrition-category" >Carbs<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Fat<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Protein<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Sodium<br />(mg)</th>
      <th className="col-md-1 nutrition-category" >Sugar<br />(g)</th>
      <th className="col-md-1 " ></th>
    </tr>
  </thead>
);


export default DiaryLogCategoryRow;