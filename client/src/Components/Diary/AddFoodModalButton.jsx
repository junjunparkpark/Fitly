import React from 'react';

const AddFoodModalButton = ({ handleAddFoodSubmit, mealType }) => {
  return (
    <div>
      <button type="button" className="btn btn-xs btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add Food
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Add a food for today!</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={ handleAddFoodSubmit } >
                <div className="form-group">
                  <label htmlFor="modal-foodname" className="form-control-label">Food Name:</label>
                  <input type="text" className="form-control" id="modal-foodname"/>
                </div>
                <div className="form-group">
                  <label htmlFor="modal-calories" className="form-control-label">Calories:</label>
                  <input type="text" className="form-control" id="modal-calories" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-carbs" className="form-control-label">Carbs:</label>
                  <input type="text" className="form-control" id="modal-carbs" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-fats" className="form-control-label">Fats:</label>
                  <input type="text" className="form-control" id="modal-fats" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-proteins" className="form-control-label">Proteins:</label>
                  <input type="text" className="form-control" id="modal-proteins" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-sodium" className="form-control-label">Sodium:</label>
                  <input type="text" className="form-control" id="modal-sodium" />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-sugar" className="form-control-label">Sugar:</label>
                  <input type="text" className="form-control" id="modal-sugar" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" type="submit" className="btn btn-primary" >Add Food</button>
                </div>
              </form>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFoodModalButton