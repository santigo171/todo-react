import React from "react";
import "./TodoList.css";

const TodoList = React.forwardRef(({ searchValue, children }, ref) => {
  if (children.length > 0) {
    return (
      <div className="TodoList">
        <div className="TodoList__Children" ref={ref}>
          {children}
        </div>
      </div>
    );
  } else if (searchValue !== "") {
    return (
      <div className="TodoList">
        <p>Didn't found tasks with "{searchValue}"</p>
      </div>
    );
  } else {
    return (
      <div className="TodoList">
        <p>No pending tasks :)</p>
      </div>
    );
  }
});

export { TodoList };
