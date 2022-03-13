import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById(props.id)
  );
}

export { Modal };
