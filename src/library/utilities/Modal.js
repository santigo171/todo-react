import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, containerId, containerRef }) {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? containerId
      ? ReactDOM.createPortal(children, document.getElementById(containerId))
      : containerRef
      ? ReactDOM.createPortal(children, containerRef.current)
      : children
    : null;
}

export { Modal };
