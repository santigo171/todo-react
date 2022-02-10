import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTasks, totalTasks }) {
  return (
    <h2 className="TodoCounter">
      COMPLETED {completedTasks}/{totalTasks} TASKS
    </h2>
  );
}

export { TodoCounter };
