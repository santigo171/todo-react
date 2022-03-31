import React from "react";
import { DateComponent } from "components/DateComponent";
import { TodoCounter } from "components/TodoCounter";
import { TodoSearch } from "components/TodoSearch";
import { TodoList } from "components/TodoList";
import { TodoItem } from "components/TodoItem";
import { CreateTodoButton } from "components/CreateTodoButton";
import { NewTodo } from "components/NewTodo";
import { PostIt } from "components/PostIt";
import { Loading } from "components/Loading";
import { CreateFirstTodo } from "components/CreateFirstTodo";
import { Error } from "components/Error";

import "./App.scss";

import { TodoContext } from "components/TodoContext";

const AppUI = React.forwardRef(() => {
  const {
    newTodo,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    todoListRef,
    paperRef,
    searchValue,
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
          {!(searchedTodos.length > 0) && !searchValue && <CreateFirstTodo />}

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
