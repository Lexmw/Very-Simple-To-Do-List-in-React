import React from "react";

export default Editview => {
    return (
    <div className="col-md-8">
            <div className="panel">
              <div className="panel-body text-left">
                <h4 className="card-text">Description</h4>
                <textarea/>
                <h4 className="card-text">Priority</h4>
                <select className='update-todo-priority'>
                  <option value="1">Low Priority</option>
                  <option value="2">Mid Level Importance</option>
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