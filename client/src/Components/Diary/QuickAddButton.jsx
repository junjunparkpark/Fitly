import React from 'react';


const QuickAddButton = ({ handleQuickAddSubmit, mealType }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-primary btn-xs dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Quick Add
      </button>
      <form className="dropdown-menu p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Food Name</label>
          <input type="text" className="form-control" id="" placeholder="White Rice..."/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Calories</label>
          <input type="text" className="form-control" id="" placeholder="Numbers only"/>
        </div>

        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input"/>
              Remember this
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-xs">Add Food</button>
      </form>
    </div>
  );
}

export default QuickAddButton;