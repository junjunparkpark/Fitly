import React, { Component } from 'react';

class AddFoodModalButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calories: 0,
      carbs: 0,
      fats: 0,
      protein: 0,
      sodium: 0,
      sugar: 0,
      name: ''
    };

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
  }

  handleNumberChange(e) {
    let value = isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
    this.setState({ [`${e.target.name}`]: value });
  }

  handleStringChange(e) {
    this.setState({ [`${e.target.name}`]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddFoodSubmit(e, this.props.mealType, this.state)
  }

  render() {
    const { mealType } = this.props;

    return (
      <div>
        <button type="button" className="btn btn-xs btn-primary" data-toggle="modal" data-target={`#${mealType}Modal`}>
          Add Food
        </button>
        <div className="modal fade" id={`${mealType}Modal`} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Add a food for today!</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit.bind(this)} name={`${this.props.mealType}`} >
                  <div className="form-group">
                    <label htmlFor="modal-foodname" className="form-control-label">Food Name:</label>
                    <input type="text" name="name" className="form-control" onChange={ this.handleStringChange }/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-calories" className="form-control-label">Calories:</label>
                    <input type="text" name="calories" className="form-control" onChange={ this.handleNumberChange } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-carbs" className="form-control-label">Carbs:</label>
                    <input type="text" name="carbs" className="form-control" onChange={ this.handleNumberChange } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-fats" className="form-control-label">Fats:</label>
                    <input type="text" name="fats" className="form-control" onChange={ this.handleNumberChange } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-proteins" className="form-control-label">Proteins:</label>
                    <input type="text" name="protein" className="form-control" onChange={ this.handleNumberChange } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-sodium" className="form-control-label">Sodium:</label>
                    <input type="text" name="sodium" className="form-control" onChange={ this.handleNumberChange } />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-sugar" className="form-control-label">Sugar:</label>
                    <input type="text" name="sugar" className="form-control" onChange={ this.handleNumberChange } />
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
}

export default AddFoodModalButton