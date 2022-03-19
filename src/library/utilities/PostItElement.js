import React from "react";
import { useMediaQuery } from "react-responsive";
import { Modal } from "@Library/utilities/Modal.js";

function PostItElement({ children }) {
  const mediaQuery1 = useMediaQuery({ query: "(min-width: 1400px)" });
  const mediaQuery2 = useMediaQuery({ query: "(min-height: 718px)" });
  const needPostit = mediaQuery1 && mediaQuery2;

  return (
    <>
      {needPostit ? <Modal containerId="PostIt">{children}</Modal> : children}
    </>
  );
}

export { PostItElement };
