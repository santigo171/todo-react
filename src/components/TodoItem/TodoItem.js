import React from "react";
import "@Library/common/css/gridLayout.css";
import "./TodoItem.scss";

function TodoItem(props) {
  let classesNames = ["TodoItem", "gridLayout"];

  if (props.completed) {
    classesNames.push("TodoItem--Completed");
  } else {
    classesNames.push("TodoItem--Uncompleted");
  }

  return (
    <div className={classesNames.join(" ")}>
      <span className="TodoItem__circle" onClick={props.deleteTodo}>
        X
      </span>
      <div className="TodoItem__content">
        <p
          className="TodoItem__content__text"
          onClick={props.toggleCompleteTodo}
        >
          {props.text}
        </p>
        {/* <p className="TodoItem__content__date">Tomorrow 8:00AM</p> */}
      </div>
    </div>
  );
}

export { TodoItem };
