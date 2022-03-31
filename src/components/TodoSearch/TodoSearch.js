import React from "react";

import "./TodoSearch.scss";
import "library/common/css/gridLayout.css";
import "library/common/css/cleanInput.scss";

import { ReactComponent as Lens } from "resources/img/icons/lens.svg";
import { TodoContext } from "components/TodoContext";

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
