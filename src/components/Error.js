import React from "react";

import { TodoContext } from "./TodoContext";

function Error() {
  const { error } = React.useContext(TodoContext);
  if (!error) return null;

  return <p>Hubo un error</p>;
}

export { Error };
