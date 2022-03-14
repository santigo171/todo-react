import React from "react";
import "./PostIt.css";

function PostIt({ children }) {
  return (
    <div className="PostIt">
      <div id="PostIt" className="PostIt__children">
        {children}
      </div>
    </div>
  );
}

export { PostIt };
