import React, { Component } from "react";
import AddTodo from "./AddTodoItem";
// import TodoList from "./TodoList";
// import EditView from './EditView';
// import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todo: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(description, priority) {
     console.log('this button was pressed')
   }




  render() {
    return (
      <div className="container">
        <h1 className="display-3">Very Simple To Do App</h1>
        <h3>track all of the things</h3>
        <hr className="tagline" />

        <div className="row">
          <AddTodo handleSubmit ={this.HandleSubmit}/>
          {/* <EditView/>
          <TodoList/>   */}
        </div>
  </div>
    );
  }
}

export default App;
