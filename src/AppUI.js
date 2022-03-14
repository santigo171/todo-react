import React from "react";
import { DateComponent } from "Components/DateComponent.js";
import { TodoCounter } from "Components/TodoCounter.js";
import { TodoSearch } from "Components/TodoSearch.js";
import { TodoList } from "Components/TodoList.js";
import { TodoItem } from "Components/TodoItem.js";
import { CreateTodoButton } from "Components/CreateTodoButton.js";
import { NewTodo } from "Components/NewTodo.js";
import { PostIt } from "Components/PostIt.js";
import "./App.css";

import { TodoContext } from "Components/TodoContext";

const AppUI = React.forwardRef(() => {
  const {
    newTodo,
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    todoListRef,
  } = React.useContext(TodoContext);
  return (
    <div className="main">
      <div className="paper paper--principal">
        <DateComponent />
        <TodoCounter />
        <TodoSearch />
        <TodoList ref={todoListRef}>
          {error && <p>Hubo un error</p>}
          {loading && <p>Cargando</p>}
          {!newTodo && !loading && !searchedTodos.length && (
            <p>Crea tu primer Todo</p>
          )}
          {newTodo && <NewTodo></NewTodo>}
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
      <div className="paper paper--decoration paper--decoration--1"></div>
      <div className="paper paper--decoration paper--decoration--2"></div>
      <div className="coffee"></div>
      <PostIt />
    </div>
  );
});

export { AppUI };
