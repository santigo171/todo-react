import React from "react";
import { TodoContext } from "./TodoContext";
import "./TodoCounter.css";
import "Library/common/css/gridLayout.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="TodoCounter gridLayout--2">
      <h2 className="TodoCounter__h2">
        COMPLETED {completedTodos}/{totalTodos} TASKS
      </h2>
    </div>
  );
}

export { TodoCounter };
