import React from "react";
import { Date } from "./components/Date.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import "./App.css";

const defaultTodos = [
  {
    text: "Practice Dance",
    completed: false,
  },
  {
    text: "Science Homework",
    completed: false,
  },
  {
    text: "123456789 123456789 1234567890",
    completed: false,
  },
  {
    text: "ScienceHomeworkfdasfdsafdagsadhgdasyhgasydyadygyadsy",
    completed: false,
  },
  {
    text: "Read 15 minutes my favorite book",
    completed: false,
  },
  {
    text: "Take out the trash Indoor",
    completed: false,
  },
  {
    text: "Visit India",
    completed: true,
  },
  {
    text: 'Learn how to play "Megalovania" on guitar',
    completed: false,
  },
  {
    text: "Call grandmother",
    completed: true,
  },
  {
    text: "Buy apples, grapes, papaya and bananas on Mr Juan’s store and give tips",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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

  return (
    <div className="main">
      <div className="paper">
        <Date />
        <TodoCounter completedTasks={completedTasks} totalTasks={totalTasks} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList searchValue={searchValue}>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
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

export default App;
