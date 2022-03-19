import React from "react";
import { TodoContext } from "@Components/TodoContext";

import TextareaAutosize from "@mui/base/TextareaAutosize";

import "@Components/TodoItem/TodoItem.scss";
import "@Library/common/css/cleanInput.css";

import { NewTodoPlaceholders as placeholders } from "@Resources/json/NewTodoPlaceholders.json";

function NewTodo() {
  const random = (array) => array[Math.floor(Math.random() * array.length)];

  const { newTodo, setNewTodo, onNewTodoFocusOut } =
    React.useContext(TodoContext);

  const onNewTodoValueChange = (event) => {
    const textarea = event.target;
    if (textarea.value.slice(-1) === "\n") {
      return textarea.blur();
    }

    setNewTodo({
      text: textarea.value,
      completed: newTodo.completed,
      date: newTodo.date,
    });

    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const randomPlaceholder = random(placeholders);

  return (
    <div className="gridLayout">
      <span className="TodoItem__circle">X</span>
      {/* <textarea
        autoFocus
        onBlur={onNewTodoFocusOut}
        className="cleanInput"
        rows={1}
        placeholder={randomPlaceholder}
        onChange={onNewTodoValueChange}
        value={newTodo.text}
      /> */}
      <TextareaAutosize
        autoFocus
        onBlur={onNewTodoFocusOut}
        className="cleanInput"
        placeholder={randomPlaceholder}
        onChange={onNewTodoValueChange}
        value={newTodo.text}
      />
    </div>
  );
}

export { NewTodo };
