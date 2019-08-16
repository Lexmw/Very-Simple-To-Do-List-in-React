import React from 'react'
// import propTypes from 'prop-types'

class todoItem extends React.Component {

render(){
return(
<div className={this.props.setColor(this.props.priority)}>
            <div className="row">
              <div className="col-sm-1">
                <input type="checkbox"  />
              </div>
              <div className="col-sm-9">
                <p>{this.props.description}</p>
              </div>
              <div className="col-sm-2">
                <button className='icon-button edit-todo'><span className="glyphicon glyphicon-edit" /></button>
                <button className='icon-button delete-todo'><span className="glyphicon glyphicon-trash"/></button>
              </div>
            </div>
          </div>
  );
}
}



export default todoItem;