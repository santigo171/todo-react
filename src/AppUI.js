import React from "react";
import { Date } from "Components/Date.js";
import { TodoCounter } from "Components/TodoCounter.js";
import { TodoSearch } from "Components/TodoSearch.js";
import { TodoList } from "Components/TodoList.js";
import { TodoItem } from "Components/TodoItem.js";
import { CreateTodoButton } from "Components/CreateTodoButton.js";
import "./App.css";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleCompleteTodo,
  deleteTodo,
}) {
  return (
    <div className="main">
      <div className="paper">
        <Date />
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList searchValue={searchValue}>
          {error && <p>Hubo un error</p>}
          {loading && <p>Cargando</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              toggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
              deleteTodo={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
        {/* <a href="https://www.flaticon.com/free-icons/feather" title="feather icons">Feather icons created by Freepik - Flaticon</a> */}
        {/* <a href="https://www.flaticon.com/free-icons/cross" title="cross icons">Cross icons created by Freepik - Flaticon</a> */}
      </div>
    </div>
  );
}

export { AppUI };
