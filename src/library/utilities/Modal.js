import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, containerId, containerRef, container }) {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? containerId
      ? ReactDOM.createPortal(children, document.getElementById(containerId))
      : containerRef
      ? ReactDOM.createPortal(children, containerRef.current)
      : container
      ? ReactDOM.createPortal(children, container)
      : children
    : null;
}

export { Modal };
