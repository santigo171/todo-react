import React from "react";
import { TodoContext } from "@Components/TodoContext";
import "./TodoCounter.scss";
import "@Library/common/css/gridLayout.css";
import { PostItElement } from "@Library/utilities/PostItElement.js";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <PostItElement>
      <div className="TodoCounter gridLayout--2">
        <h2 className="TodoCounter__h2">
          COMPLETED {completedTodos}/{totalTodos} TASKS
        </h2>
      </div>
    </PostItElement>
  );
}

export { TodoCounter };
