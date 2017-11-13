import React from 'react';


const AddFoodButton = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-primary btn-xs dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Add Food
      </button>
      <form className="dropdown-menu p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Email address</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
          </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"/>
                  Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}

export default AddFoodButton;