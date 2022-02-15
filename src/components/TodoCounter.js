import React from "react";
import { TodoContext } from "./TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      COMPLETED {completedTodos}/{totalTodos} TASKS
    </h2>
  );
}

export { TodoCounter };
