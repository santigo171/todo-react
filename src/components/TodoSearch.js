import React from "react";
import "./TodoSearch.css";
import "Library/common/css/gridLayout.css";
import "Library/common/css/cleanInput.css";

import { ReactComponent as Lens } from "Resources/img/lens.svg";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch gridLayout">
      <Lens className="TodoSearch__Lens" alt="A lens icon" />
      <input
        className="TodoSearch__input cleanInput"
        placeholder="Search Tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
