import React from "react";
import { useMediaQuery } from "react-responsive";
import { Modal } from "@Library/utilities/Modal";
import styles from "../../scss/partials/_export.scss";

function PostItElement({ children }) {
  const mediaQuery1 = useMediaQuery({
    query: `(min-width: ${styles["tertiary-breakpoint-width"]})`,
  });
  const mediaQuery2 = useMediaQuery({
    query: `(min-height: ${styles["primary-breakpoint-height"]})`,
  });
  const needPostit = mediaQuery1 && mediaQuery2;

  return (
    <>
      {needPostit ? <Modal containerId="PostIt">{children}</Modal> : children}
    </>
  );
}

export { PostItElement };
