import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_REACT_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  const [searchValue, setSearchValue] = React.useState("");

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  } else {
    searchedTodos = todos;
  }

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
