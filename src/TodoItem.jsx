import React from 'react'
import EditView from './EditView'


class todoItem extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      editDescription: this.props.description,
      editPriority: this.props.priority,
      id: this.props.id
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log('It was clicked!');
  }

  strikeThru(complete){
    if(complete === true){
      console.log(complete);
      return'line-through'
    }else{
      return 'none'
    }
  }


render(){
return(
<li className={this.props.setColor(this.props.priority)}>
            <div className="row">
              {
                this.props.edit === true ?

                <EditView
                  editDescription = {this.state.editDescription}
                  editPriority = {this.state.editPriority}
                  id = {this.state.id}
                  handleChange ={this.handleChange}
                  handleSave ={this.props.handleSave}
                  /> 
              :
              <div className= 'row'>
              <div className="col-sm-1">
                <input 
                type="checkbox"
                checked={this.props.complete}
                onClick = {() => this.props.handleCheck(this.props.id)}
                />
              </div>
              <div className="col-sm-9">
                <p style = {{textDecoration: this.strikeThru(this.props.complete)}}>{this.props.description}</p>
              </div>
              </div>
              }
              <div className="col-sm-2">
                <button className='icon-button edit-todo'
                onClick = {() => this.props.handleEdit(this.props.id)}
                >
                  <span className="glyphicon glyphicon-edit" />
                  </button>
                <button 
                className='icon-button delete-todo'
                onClick = {() => this.props.delTodo(this.props.id)}>
                  <span className="glyphicon glyphicon-trash"/>
                  </button>
              </div>
          </div>
        </li>
  );
}
}



export default todoItem;