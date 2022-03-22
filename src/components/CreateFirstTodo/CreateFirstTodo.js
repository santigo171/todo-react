import React from "react";

import { TodoContext } from "@Components/TodoContext";
import { CreateFirstTodo__text } from "./CreateFirstTodo__text";

import { ProductivityQuotes } from "@Resources/json/ProductivityQuotes.json"
import { author_photos } from "./author_photos"

import "./CreateFirstTodo.scss"

const quote = ProductivityQuotes[Math.floor(Math.random()*ProductivityQuotes.length)];

function CreateFirstTodo() {
  const { newTodo, loading, searchedTodos } = React.useContext(TodoContext);

  const CreateFirstTodoRef = React.useRef(null);
  const [hideComponent, setHideComponent] = React.useState(false);

  React.useEffect(() => {
    const CreateFirstTodoDiv = CreateFirstTodoRef.current;
    if (newTodo || searchedTodos.length) {
      CreateFirstTodoDiv.classList.add("fade-out");
      setHideComponent(true);
    } else {
      CreateFirstTodoDiv.classList.remove("fade-out");
      setHideComponent(false);
    }

  }, [newTodo, loading, searchedTodos]);

  return (
    <div
      className="CreateFirstTodo fade-in"
      ref={CreateFirstTodoRef}
    >
      <div className="CreateFirstTodo__quote">
        <img
          className="CreateFirstTodo__quote__photo"
          src={author_photos[quote.id]}
          alt={"Picture of " + quote.author}
         />
        <p className="CreateFirstTodo__quote__text">
           {"\"" + quote.quote + "\""}
        </p>
        <p className="CreateFirstTodo__quote__author">
          {"- " + quote.author}
        </p>
      </div>
      <CreateFirstTodo__text hide={hideComponent}/>
    </div>
  );
}

export { CreateFirstTodo };
