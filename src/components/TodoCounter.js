import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h2 className="TodoCounter">
      COMPLETED {completedTodos}/{totalTodos} TASKS
    </h2>
  );
}

export { TodoCounter };
