import React from 'react';

class AddTodoItem extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    id: 4,
    description: '',
    priority:'1',
  }
  this.handleChange = this.handleChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
  console.log('It was clicked!');
}

onSubmit(event){
  event.preventDefault();
  this.props.AddTodoItem(this.state.description, this.state.priority);
  this.setState({description:'', priority: ''})
}

render() {
  return (
  <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Add New Todo</div>
              <div className="panel-body text-left">
                <form onSubmit={this.onSubmit}  >

                <h4 className="card-text">I want to...</h4>
                <textarea className='create-todo-text' name='description' value={this.state.description} onChange={this.handleChange}/>
                <h4 className="card-text">How much of a priority is this?</h4>

                <select className='create-todo-priority' name='priority' value={this.state.priority} onChange={this.handleChange}>
                  {/* <option value=''>Priority</option> */}
                  <option value='1'>Low Priority</option>
                  <option value='2'>Mid Priority</option>
                  <option value='3'>High Priority</option>
                </select>
                </form>
              </div>
              <div className="panel-footer">
              <button className="btn btn-success btn-block create-todo" type="button" onSubmit={this.onSubmit}onClick={ () => {this.props.handleSubmit(this.state.description, this.state.priority, this.state.id)}}>
                  Add
                </button>
              </div>
            </div>
          </div>
)};
}

export default AddTodoItem;