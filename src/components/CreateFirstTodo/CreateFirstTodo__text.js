import React from "react";

import { Modal } from "library/utilities/Modal";
import { TodoContext } from "components/TodoContext";
import arrow from "resources/img/icons/arrow.png";

import "./CreateFirstTodo.scss";

function CreateFirstTodo__text({ hide }) {
  const { paperRef } = React.useContext(TodoContext);
  const CreateFirstTodo__textRef = React.useRef(null);

  React.useEffect(() => {
    const CreateFirstTodo__textP = CreateFirstTodo__textRef.current;
    if (CreateFirstTodo__textP) {
      if (hide) {
        CreateFirstTodo__textP.classList.add(
          "fade-out",
          "fade-out--CreateFirstTodo__text"
        );
      } else {
        CreateFirstTodo__textP.classList.remove(
          "fade-out",
          "fade-out--CreateFirstTodo__text"
        );
      }
    }
  }, [hide]);

  return (
    <Modal containerRef={paperRef}>
      <p
        ref={CreateFirstTodo__textRef}
        className="CreateFirstTodo__text fade-in"
      >
        Create your first Todo!
        <img src={arrow} className="CreateFirstTodo__text__arrow" alt="" />
      </p>
    </Modal>
  );
}

export { CreateFirstTodo__text };
