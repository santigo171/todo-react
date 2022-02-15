import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, defaultValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(defaultValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          parsedItem = defaultValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 4000);
  }, []);

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
}

function App() {
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

  // React.useEffect(() => {
  //   console.log("use effect");
  // }, [totalTodos]);

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
