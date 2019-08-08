import React from "react";
import TodoItem from './TodoItem'

export default listItems => {
  return (
    <div className="col-md-8">
      <div className="panel panel-default">
        <div className="panel-heading">View Todos</div>
        <div className="panel-body">
          <TodoItem/>
        </div>
      </div>
    </div>
  );
};
