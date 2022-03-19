import React from "react";

import { TodoContext } from "@Components/TodoContext";
import walking from "@Resources/img/walking.gif";

function CreateFirstTodo() {
  const { newTodo, loading, searchedTodos } = React.useContext(TodoContext);

  if (newTodo || loading || searchedTodos.length) return null;

  return (
    <div className="CreateFirstTodo">
      <div className="CreateFirstTodo__children">
        <img
          className="CreateFirstTodo__children__animation"
          src={walking}
          alt="Animation of someone walking"
        />
        <p className="CreateFirstTodo__children__text">
          Create your first Todo!
        </p>
      </div>
    </div>
  );
}

export { CreateFirstTodo };
