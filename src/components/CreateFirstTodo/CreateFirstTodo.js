import React from "react";

import { TodoContext } from "components/TodoContext";
import { CreateFirstTodo__text } from "./CreateFirstTodo__text";

import { ProductivityQuotes } from "resources/json/ProductivityQuotes.json";
import { author_photos } from "./author_photos";

import "./CreateFirstTodo.scss";

const quote =
  ProductivityQuotes[Math.floor(Math.random() * ProductivityQuotes.length)];

function CreateFirstTodo() {
  const { newTodo, loading, searchedTodos, searchValue } =
    React.useContext(TodoContext);

  const CreateFirstTodoRef = React.useRef(null);
  const [hideComponent, setHideComponent] = React.useState(false);

  React.useEffect(() => {
    const CreateFirstTodoDiv = CreateFirstTodoRef.current;
    if (
      newTodo ||
      (searchedTodos.length && !searchValue) || // There are todos, there isnt search value
      (!searchedTodos.length && searchValue) || // There arent todos, there is search value
      (searchedTodos.length && searchValue) // There are todos, there is search value
    ) {
      CreateFirstTodoDiv.classList.add("fade-out");
      setHideComponent(true);
    } else {
      CreateFirstTodoDiv.classList.remove("fade-out");
      setHideComponent(false);
    }
  }, [newTodo, loading, searchedTodos]);

  return (
    <div className="CreateFirstTodo fade-in" ref={CreateFirstTodoRef}>
      <div className="CreateFirstTodo__quote">
        <img
          className="CreateFirstTodo__quote__photo"
          src={author_photos[quote.id]}
          alt={"Picture of " + quote.author}
        />
        <p className="CreateFirstTodo__quote__text">
          {'"' + quote.quote + '"'}
        </p>
        <p className="CreateFirstTodo__quote__author">{"- " + quote.author}</p>
      </div>
      <CreateFirstTodo__text hide={hideComponent} />
    </div>
  );
}

export { CreateFirstTodo };
