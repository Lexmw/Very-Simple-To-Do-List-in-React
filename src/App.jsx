import React, { Component } from "react";
import AddTodo from "./AddTodoItem";
import TodoItem from "./TodoItem";
// import EditView from './EditView';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  
  handleSubmit(description, priority, id) {
    console.log("this button was pressed")

    let listItem ={
      description: description,
      priority:priority,
      id: 1 + Math.random(),
      complete: false,
      edit: false
    }
    
    this.state.todo.push(listItem);
    this.setState({todo: this.state.todo, description:'', priority:''})
  }

  
  setColor(priority) {  
      if (priority === "1") {
        return ('alert alert-success');
      } else if (priority === "2") {
        return('alert alert-warning');
      } else if (priority === "3") {
        return('alert alert-danger');
      }
  }


  render() {
   let {todo} = this.state
   console.log({todo})
    return (
      <div className="container">
        <h1 className="display-3">VERY SIMPLE TODO APP</h1>
        <h3>Track all of the things!</h3>
        <hr className="tagline" />

        <div className="row">
          <AddTodo handleSubmit={this.handleSubmit} />
          {/* <EditView/> */}
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">View Todos</div>
              <div className="panel-body">
                {this.state.todo.map((todo, index) => (
                  <TodoItem
                    todo={todo}
                    setColor= {this.setColor}
                    key={index}
                    description={todo.description}
                    priority={todo.priority}
                  />
                ))}
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}
export default App;
