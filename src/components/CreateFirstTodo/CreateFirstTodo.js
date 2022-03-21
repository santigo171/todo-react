import React from "react";

import { TodoContext } from "@Components/TodoContext";

import { ProductivityQuotes } from "@Resources/json/ProductivityQuotes.json"
import { author_photos } from "./author_photos"

import "./CreateFirstTodo.scss"

function CreateFirstTodo() {
  const { newTodo, loading, searchedTodos } = React.useContext(TodoContext);

  if (newTodo || loading || searchedTodos.length) return null;

  const quote = ProductivityQuotes[Math.floor(Math.random()*ProductivityQuotes.length)];
  
  return (
    <div className="CreateFirstTodo">
      <div className="CreateFirstTodo__quote">
        <img
          className="CreateFirstTodo__quote__photo"
          src={author_photos[quote.id]}
          alt={"Picture of " + quote.author}
         />
        <p className="CreateFirstTodo__quote__text">
           {quote.quote}
        </p>
        <p className="CreateFirstTodo__quote__author">
          {quote.author}
        </p>
      </div>
      <p className="CreateFirstTodo__text">
          Create your first Todo!
      </p>
    </div>
  );
}

export { CreateFirstTodo };
