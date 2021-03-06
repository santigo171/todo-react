import React from "react";

import "./Error.scss";
import { TodoContext } from "components/TodoContext";

function Error() {
  const { error } = React.useContext(TodoContext);
  if (!error) return null;

  return <p>Hubo un error</p>;
}

export { Error };
