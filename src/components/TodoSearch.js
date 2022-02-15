import React from "react";
import "./TodoSearch.css";
import "Library/common/css/GridLayout.css";

import { ReactComponent as Lens } from "Resources/img/lens.svg";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch GridLayout">
      <Lens className="TodoSearch__Lens" alt="A lens icon" />
      <input
        className="TodoSearch__input"
        placeholder="Search Tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
