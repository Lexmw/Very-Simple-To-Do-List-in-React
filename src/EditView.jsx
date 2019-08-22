import React from "react";

const EditView = (props) => {
    return (
    <div className="col-md-8">
            <div className="panel">
              <div className="panel-body text-left">
                <h4 className="card-text">Edit</h4>
                <textarea name='description' value= {props.editDescription} />
                <h4 className="card-text">Priority</h4>
                <select className='update-todo-priority' name='priority' value={props.editPriority} >
                  <option value=''>Priority</option>
                  <option value="1">Low Priority</option>
                  <option value="2">Mid Priority</option>
                  <option value="3">High Priority</option>
                </select>
              </div>
              <div className="panel-footer center-block">
                <div className='text-right'><button className="btn btn-success" type="button"> Save </button></div>
                 
              </div>
            </div>
          </div>
);
}

export default EditView;