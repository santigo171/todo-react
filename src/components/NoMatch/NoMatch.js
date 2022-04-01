import React from "react";

import "./NoMatch.scss";
import thinking from "resources/img/animations/thinking.gif";
import { TodoContext } from "components/TodoContext";

export function NoMatch() {
  const { searchedTodos, searchValue, newTodo } = React.useContext(TodoContext);
  const NoMatchRef = React.useRef(null);

  React.useEffect(() => {
    const NoMatchDiv = NoMatchRef.current;
    if (searchedTodos.length > 0 || (searchedTodos.length === 0 && newTodo)) {
      NoMatchDiv.classList.add("fade-out");
    } else if (searchedTodos.length === 0 && searchValue) {
      NoMatchDiv.classList.remove("fade-out");
    }
  }, [searchedTodos, searchValue, newTodo]);

  return (
    <div className="NoMatch fade-in" ref={NoMatchRef}>
      <div className="NoMatch__children">
        <img
          className="NoMatch__children__animation"
          src={thinking}
          alt="Animation of someone thinking"
        />
        <p className="NoMatch__children__text">
          Didn't find any task with{" "}
          <span className="NoMatch__children__text__searchValue">
            "{searchValue}"
          </span>
        </p>
      </div>
    </div>
  );
}
