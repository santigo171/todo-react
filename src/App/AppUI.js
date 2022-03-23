import React from "react";
import { DateComponent } from "@Components/DateComponent";
import { TodoCounter } from "@Components/TodoCounter";
import { TodoSearch } from "@Components/TodoSearch";
import { TodoList } from "@Components/TodoList";
import { TodoItem } from "@Components/TodoItem";
import { CreateTodoButton } from "@Components/CreateTodoButton";
import { NewTodo } from "@Components/NewTodo";
import { PostIt } from "@Components/PostIt";
import { Loading } from "@Components/Loading";
import { CreateFirstTodo } from "@Components/CreateFirstTodo";
import { Error } from "@Components/Error";

import "./App.scss";

import { TodoContext } from "@Components/TodoContext";

const AppUI = React.forwardRef(() => {
  const {
    newTodo,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    todoListRef,
    paperRef,
    searchValue
  } = React.useContext(TodoContext);
  return (
    <div className="main">
      <div className="paper paper--principal" ref={paperRef}>
        <DateComponent />
        <TodoCounter />
        <TodoSearch />
        <TodoList ref={todoListRef}>
          <Error />
          <Loading />
          {!(searchedTodos.length > 0) && !(searchValue) && <CreateFirstTodo />}

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
