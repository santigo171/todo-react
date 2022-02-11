import React from "react";
import { AppUI } from "./AppUI";

function App() {
  const localStorageTodos = localStorage.getItem("TODO_REACT_V1");
  let parsedTodos;

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    parsedTodos = [];
    localStorage.setItem("TODO_REACT_V1", JSON.stringify(parsedTodos));
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;

  let searchedTodos = [];

  const [searchValue, setSearchValue] = React.useState("");

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    searchedTodos = todos;
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODO_REACT_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (completedTodoText) => {
    const completedTodoIndex = todos.findIndex(
      (todo) => todo.text === completedTodoText
    );
    const newTodos = [...todos];
    newTodos[completedTodoIndex].completed =
      !newTodos[completedTodoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (todoText) => {
    const newTodos = [...todos.filter((todo) => todo.text !== todoText)];
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
