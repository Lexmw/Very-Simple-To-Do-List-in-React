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
    this.handleCheck = this.handleCheck.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  handleSubmit(description, priority) {
    console.log("this button was pressed");

    let listItem = {
      description: description,
      priority: priority,
      id: 1 + Math.random(),
      complete: false,
      edit: false
    };

    this.state.todo.push(listItem);
    this.setState({ todo: this.state.todo, description: "", priority: "" });
  }

  setColor(priority) {
    if (priority === "1") {
      return "alert alert-success";
    } else if (priority === "2") {
      return "alert alert-warning";
    } else if (priority === "3") {
      return "alert alert-danger";
    }
  }

  handleCheck(id) {
    console.log("this was checked", id);
    this.setState(prevState => ({
      todo: prevState.todo.map(listItem => {
        if (listItem.id == id) {
          listItem.complete = !listItem.complete;
          console.log("this is the listItem:", listItem);
        }
        return listItem;
      })
    }));
  }

  handleEdit(id) {
    console.log('Are you ready to edit?')
    this.setState(prevState => ({
      todo: prevState.todo.map(listItem => {
        if(listItem.id == id){
          listItem.edit = !listItem.edit;
          console.log('Edit Status:', listItem.edit);
        }
        return listItem;
      })
    })
    )
  };

//In this Save function I am attempting to grab the id of the item in the array and to update the todo array with all the listitems
handleSave(editDescription, editPriority,id) {
  this.setState(prevState => ({
    todo: prevState.todo.map(listItem => {
      if(listItem.id == id){
        listItem.description = editDescription;
        listItem.priority = editPriority;
        listItem.edit = false;
      }
      return listItem;
    })
  })
 )
}

delTodo(id){
  console.log('this is the selected id:',id)
  console.log('this is the complete array:',this.state.todo)
  let deltempo = this.state.todo.filter((listItem) => {
    console.log('listItem',listItem)
    if(listItem.id !== id){
      return listItem;
    } 
  });
    this.setState({
      todo: deltempo
      })
};

  render() {
    const { todo } = this.state;
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
                <ul>
                {todo.map(todo => (
                  <TodoItem
                    setColor={this.setColor}
                    handleCheck={this.handleCheck}
                    handleEdit = {this.handleEdit}
                    handleSave = {this.handleSave}
                    delTodo = {this.delTodo}
                    todo={todo}
                    key={todo.id}
                    description={todo.description}
                    priority={todo.priority}
                    complete={todo.complete}
                    edit={todo.edit}
                    id={todo.id}
                  />
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
