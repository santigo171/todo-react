import React from "react";

import "./Loading.scss";
import walking from "resources/img/animations/walking.gif";
import { TodoContext } from "components/TodoContext";

export function Loading() {
  const { loading } = React.useContext(TodoContext);
  const LoadingRef = React.useRef(null);

  React.useEffect(() => {
    if (!loading) {
      const LoadingDiv = LoadingRef.current;

      LoadingDiv.classList.add("fade-out");
    }
  }, [loading]);

  return (
    <div className="Loading fade-in" ref={LoadingRef}>
      <div className="Loading__children">
        <img
          className="Loading__children__animation"
          src={walking}
          alt="Animation of someone walking"
        />
        <p className="Loading__children__text">
          {loading && "Looking for your Tasks..."}
          {!loading && "Found them!"}
        </p>
      </div>
    </div>
  );
}
