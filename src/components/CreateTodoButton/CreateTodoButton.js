import React from "react";
import "./CreateTodoButton.scss";
import quillPen from "resources/img/icons/quill_pen.png";
import { TodoContext } from "components/TodoContext";

function CreateTodoButton() {
  const { setNewTodo } = React.useContext(TodoContext);
  return (
    <button
      onClick={() =>
        setNewTodo({
          text: undefined,
          completed: false,
          date: undefined,
        })
      }
      className="CreateTodoButton"
    >
      <img
        className="CreateTodoButton__img"
        src={quillPen}
        alt="An ilustration of a quill pen"
      />
    </button>
  );
}

export { CreateTodoButton };
