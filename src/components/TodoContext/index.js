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
  const [newTodo, setNewTodo] = React.useState(null);
  const todoListRef = React.useRef(null);
  const paperRef = React.useRef(null);

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

  const onNewTodoFocusOut = (e) => {
    const finishedTodo = newTodo;
    setNewTodo(undefined);

    if (!finishedTodo.text) return;
    if (finishedTodo.text.trim() === "") return;

    const searchRepeatedTodos = (originalTodo) =>
      todos.filter(
        (todo) => todo.text.toLowerCase() === originalTodo.text.toLowerCase()
      );

    const repeatedTodos = searchRepeatedTodos(finishedTodo);

    if (repeatedTodos.length > 0) {
      const repeatedTodo = repeatedTodos[0];
      const repeatedTodoIndex =
        todos.findIndex((todo) => todo.text === repeatedTodo.text) + 1;

      const todoElement = todoListRef.current.children.item(repeatedTodoIndex);

      const topPos = todoElement.offsetTop;
      todoListRef.current.scrollTop = topPos - 35;

      todoElement.classList.add("TodoItem--Repeated");
      setTimeout(
        () => todoElement.classList.remove("TodoItem--Repeated"),
        2000
      );

      return;
    }

    const newTodos = [...todos];
    newTodos.unshift(finishedTodo);
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
        newTodo,
        setNewTodo,
        onNewTodoFocusOut,
        todoListRef,
        paperRef
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
